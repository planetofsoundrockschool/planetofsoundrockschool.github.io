exports.handler = async function (event) {
	if (event.httpMethod !== 'POST') {
		return { statusCode: 405, body: 'Method Not Allowed' };
	}

	try {
		const { email_address } = JSON.parse(event.body);

		const res = await fetch(`https://emailoctopus.com/api/1.6/lists/${process.env.EMAILOCTOPUS_LIST_ID}/contacts`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				api_key: process.env.EMAILOCTOPUS_API_KEY,
				email_address,
				status: 'SUBSCRIBED'
			})
		});

		const data = await res.json();

		if (res.status === 409 && data.error.code === 'MEMBER_EXISTS_WITH_EMAIL_ADDRESS') {
			return { statusCode: 200, body: JSON.stringify({ success: true, message: 'Already subscribed!' }) };
		}

		if (!res.ok) {
			console.error('EmailOctopus error:', data);
			return { statusCode: res.status, body: JSON.stringify({ error: data }) };
		}

		return { statusCode: 200, body: JSON.stringify({ success: true }) };
	} catch (err) {
		console.error('Server crash:', err);
		return { statusCode: 500, body: JSON.stringify({ error: 'Server error' }) };
	}
};
