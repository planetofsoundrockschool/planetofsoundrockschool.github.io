document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('newsletter-form');
	const messageBox = document.getElementById('form-message');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		const email = document.getElementById('email').value;

		try {
			const res = await fetch('/.netlify/functions/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email_address: email })
			});

			if (res.ok) {
				const data = await res.json();
				if (data.message === 'Already subscribed!') {
					messageBox.innerHTML = `
            <div class="alert alert-info" role="alert" aria-live="assertive" aria-atomic="true">
              You're already subscribed — thanks for joining our list!
            </div>`;
				} else {
					window.location.href = '/thanks.html';
				}
			} else {
				const err = await res.json();
				messageBox.innerHTML = `
          <div class="alert alert-danger" role="alert" aria-live="assertive" aria-atomic="true">
            ${err.error.message}
          </div>`;
			}
		} catch (error) {
			messageBox.innerHTML = `
        <div class="alert alert-danger" role="alert" aria-live="assertive" aria-atomic="true">
          Something went wrong. Please try again later.
        </div>`;
		}
	});
});
