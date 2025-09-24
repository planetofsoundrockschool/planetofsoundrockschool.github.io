exports.handler = async function (event) {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' };
	}

	try {
		const data = JSON.parse(event.body);
		const { email_address, website, timeTaken } = data;

		// Honeypot check (field should be empty)
		if (website && website.trim() !== "") {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: { message: "Bot submission detected" } }),
			};
		}

		// Time-based spam check (< 1 second = likely bot)
		if (typeof timeTaken === "number" && timeTaken < 1) {
			return {
				statusCode: 400,
				body: JSON.stringify({ error: { message: "Form submitted too quickly" } }),
			};
		}

		const res = await fetch(`https://emailoctopus.com/api/1.6/lists/${process.env.EMAILOCTOPUS_LIST_ID}/contacts`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				api_key: process.env.EMAILOCTOPUS_API_KEY,
				email_address,
				status: 'SUBSCRIBED'
			})
		});

		const result = await res.json();

		if (res.status === 409 && result.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
			return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Already subscribed!' }) };
		}

		if (!res.ok) {
			console.error('EmailOctopus error:', result);
			return { statusCode: res.status, body: JSON.stringify({ error: result }) };
		}

		return { statusCode: 200, body: JSON.stringify({ success: true }) };
	} catch (err) {
		console.error('Server crash:', err);
		return { statusCode: 500, body: JSON.stringify({ error: { message: 'Server error' } }) };
	}
};