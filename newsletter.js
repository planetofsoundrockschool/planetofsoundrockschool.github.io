document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('newsletter-form');
	const messageBox = document.getElementById('form-message');
	const formLoadTimeField = document.getElementById('formLoadTime');
	
	// Record when the form loads
	const formLoadTime = Date.now();
	if (formLoadTimeField) {
		formLoadTimeField.value = formLoadTime;
	}

	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		
		// Get form data
		const email = document.getElementById('email').value;
		const website = document.querySelector('input[name="website"]')?.value || '';
		const loadTime = formLoadTimeField ? parseInt(formLoadTimeField.value) : Date.now();
		
		// Calculate time taken in seconds
		const timeTaken = (Date.now() - loadTime) / 1000;
		
		// Prepare submission data
		const submissionData = {
			email_address: email, // Keep the original field name for compatibility
			website: website, // honeypot
			timeTaken: timeTaken
		};

		try {
			const res = await fetch('/.netlify/functions/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(submissionData)
			});

			if (res.ok) {
				const data = await res.json();
				if (data.message === 'Already subscribed!') {
					messageBox.innerHTML = `
		<div class="alert alert-info" role="alert" aria-live="assertive" aria-atomic="true">
		  You're already subscribed — thanks for joining our list!
		</div>`;
				} else {
					window.location.href = 'http://localhost:8888/thanks.html';
				}
			} else {
				const err = await res.json();
				messageBox.innerHTML = `
	  <div class="alert alert-danger" role="alert" aria-live="assertive" aria-atomic="true">
		${err.error.message || err.error || 'Something went wrong. Please try again.'}
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