document.addEventListener('DOMContentLoaded', () => {
	const toggleBtn = document.getElementById('contrast-toggle');
	const body = document.body;
	const logo = document.getElementById('logo'); // may be null if no id on <img>
	const BLACK_LOGO = 'logo-black.png';    // Use black logo for both modes

	// If logo exists, remember whatever src it started with (fallback)
	const DEFAULT_LOGO = logo ? logo.getAttribute('src') : null;

	function setButton(stateHigh) {
		toggleBtn.textContent = stateHigh ? 'Disable High Contrast' : 'Enable High Contrast';
		toggleBtn.setAttribute('aria-pressed', stateHigh ? 'true' : 'false');
	}

	function setLogo(high) {
		if (!logo) return; // no-op if logo element isn't present
		// Use black logo for both normal and high contrast modes
		logo.src = BLACK_LOGO || DEFAULT_LOGO || logo.src;
	}

	function enableHighContrast() {
		body.classList.add('high-contrast');
		setLogo(true);
		setButton(true);
		localStorage.setItem('contrast', 'high');
	}

	function disableHighContrast() {
		body.classList.remove('high-contrast');
		setLogo(false);
		setButton(false);
		localStorage.setItem('contrast', 'normal');
	}

	// Initialize from saved preference (do NOT change logo if not needed)
	const saved = localStorage.getItem('contrast');
	if (saved === 'high') {
		enableHighContrast();
	} else {
		// Leave the page as-is; just ensure button state/label is correct
		setButton(false);
	}

	// Click handler
	toggleBtn.addEventListener('click', () => {
		if (body.classList.contains('high-contrast')) {
			disableHighContrast();
		} else {
			enableHighContrast();
		}
	});
});