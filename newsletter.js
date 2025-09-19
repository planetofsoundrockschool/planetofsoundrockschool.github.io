exports.handler = async (event) => {
	try {
		const data = JSON.parse(event.body);
		const { email, website, timeTaken } = data;

		// Honeypot check
		if (website && website.trim() !== "") {
			return { statusCode: 400, body: JSON.stringify({ error: "Bot submission detected (honeypot)" }) };
		}

		// Time-based check (< 2 seconds = likely bot)
		if (timeTaken && parseFloat(timeTaken) < 2) {
			return { statusCode: 400, body: JSON.stringify({ error: "Bot submission detected (too fast)" }) };
		}

		// EmailOctopus API request
		const response = await fetch(
			`https://emailoctopus.com/api/1.6/lists/${process.env.EMAILOCTOPUS_LIST_ID}/contacts`,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					api_key: process.env.EMAILOCTOPUS_API_KEY,
					email_address: email,
					status: "SUBSCRIBED",
				}),
			}
		);

		const result = await response.json();

		if (!response.ok) {
			return {
				statusCode: response.status,
				body: JSON.stringify({ error: result.error.message || "API error" }),
			};
		}

		return { statusCode: 200, body: JSON.stringify({ success: true }) };
	} catch (err) {
		return { statusCode: 500, body: JSON.stringify({ error: "Internal Server Error" }) };
	}
};