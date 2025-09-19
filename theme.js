const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const logo = document.getElementById('logo');
const card = document.getElementById('newsletter-card');
const emailHelp = document.getElementById('email-help');

function setTheme(mode) {
	if (mode === 'dark') {
		// Body
		body.classList.add('bg-dark', 'text-light');
		body.classList.remove('bg-body-secondary', 'text-dark');

		// Toggle button
		toggleBtn.setAttribute('aria-pressed', 'true');
		toggleBtn.textContent = '☀️ Light mode';
		toggleBtn.classList.remove('btn-outline-secondary');
		toggleBtn.classList.add('btn-outline-light');

		// Logo
		logo.src = 'logo-white.png';

		// Card (subtle contrast in dark mode)
		card.className = 'card bg-secondary text-light mx-auto';
		card.style.maxWidth = '400px';

		// Helper text (high contrast in dark mode)
		emailHelp.className = 'form-text text-light';

		localStorage.setItem('theme', 'dark');
	} else {
		// Body
		body.classList.add('bg-body-secondary', 'text-dark');
		body.classList.remove('bg-dark', 'text-light');

		// Toggle button
		toggleBtn.setAttribute('aria-pressed', 'false');
		toggleBtn.textContent = '🌙 Dark mode';
		toggleBtn.classList.remove('btn-outline-light');
		toggleBtn.classList.add('btn-outline-secondary');

		// Logo
		logo.src = 'logo.png';

		// Card (subtle contrast in light mode)
		card.className = 'card bg-white text-dark mx-auto border';
		card.style.maxWidth = '400px';

		// Helper text (muted in light mode)
		emailHelp.className = 'form-text text-muted';

		localStorage.setItem('theme', 'light');
	}
}

// Initial load
if (localStorage.getItem('theme')) {
	setTheme(localStorage.getItem('theme'));
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
	setTheme('dark');
} else {
	setTheme('light');
}

// Toggle on click
toggleBtn.addEventListener('click', () => {
	const current = body.classList.contains('bg-dark') ? 'dark' : 'light';
	setTheme(current === 'dark' ? 'light' : 'dark');
});
