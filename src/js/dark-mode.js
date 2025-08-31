/**
 * Dark Mode Functionality
 * 
 * Handles dark mode toggle functionality including:
 * - System preference detection
 * - User preference persistence in localStorage
 * - UI updates across all toggle buttons
 */

// Dark mode state
let darkModeEnabled = false;

// Initialize dark mode
function initDarkMode() {
    // Check for system preference first
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for user's stored preference
    const userPreference = localStorage.getItem('darkModeEnabled');
    
    // Set initial state based on user preference or system preference
    if (userPreference !== null) {
        // User has a stored preference
        darkModeEnabled = userPreference === 'true';
    } else {
        // First visit - use system preference
        darkModeEnabled = prefersDarkScheme.matches;
        // Don't store it yet - let user's first manual choice be the stored preference
    }
    
    // Apply current dark mode state immediately
    applyDarkMode();
    
    // Listen for system preference changes
    prefersDarkScheme.addEventListener('change', (e) => {
        // Only auto-update if user hasn't manually set a preference
        if (localStorage.getItem('darkModeEnabled') === null) {
            darkModeEnabled = e.matches;
            applyDarkMode();
        }
    });
}

// Toggle dark mode
function toggleDarkMode() {
    darkModeEnabled = !darkModeEnabled;
    localStorage.setItem('darkModeEnabled', darkModeEnabled.toString());
    
    // Apply the new state
    applyDarkMode();
    
    // Show feedback message
    showFeedback(darkModeEnabled ? 'Dark mode enabled' : 'Light mode enabled');
}

// Apply dark mode state to document and update UI
function applyDarkMode() {
    // Apply theme attribute to HTML element
    if (darkModeEnabled) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    
    // Update all dark mode toggle buttons
    updateDarkModeUI();
}

// Update all dark mode toggle buttons
function updateDarkModeUI() {
    // All dark mode toggle buttons
    const toggleButtons = [
        'dark-mode-toggle-mobile',
        'dark-mode-toggle-desktop',
        'dark-mode-toggle-menu'
    ];
    
    toggleButtons.forEach(buttonId => {
        const btn = document.getElementById(buttonId);
        if (btn) {
            const icon = btn.querySelector('i');
            const text = btn.querySelector('small') || btn.querySelector('span');
            
            if (darkModeEnabled) {
                icon.className = 'fas fa-moon me-1';
                if (text) {
                    text.textContent = buttonId === 'dark-mode-toggle-mobile' ? 'Light Mode' : 'Light Mode';
                }
                btn.setAttribute('aria-label', 'Switch to light mode');
                btn.title = 'Switch to light mode';
            } else {
                icon.className = 'fas fa-sun me-1';
                if (text) {
                    text.textContent = buttonId === 'dark-mode-toggle-mobile' ? 'Dark Mode' : 'Dark Mode';
                }
                btn.setAttribute('aria-label', 'Switch to dark mode');
                btn.title = 'Switch to dark mode';
            }
        }
    });
}

// Show user feedback popup
function showFeedback(message) {
    let popup = document.getElementById('dark-mode-feedback');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'dark-mode-feedback';
        popup.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: var(--bs-primary, #0d6efd);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 10000;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        document.body.appendChild(popup);
    }
    
    popup.textContent = message;
    popup.setAttribute('role', 'status');
    popup.setAttribute('aria-live', 'polite');
    
    // Show the popup
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateY(0)';
    }, 100);
    
    // Hide the popup after 2 seconds
    setTimeout(() => {
        popup.style.opacity = '0';
        popup.style.transform = 'translateY(-20px)';
    }, 2000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initDarkMode();
    
    // Add toggle button listeners
    const toggleButtons = [
        'dark-mode-toggle-mobile',
        'dark-mode-toggle-desktop',
        'dark-mode-toggle-menu'
    ];
    
    toggleButtons.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                toggleDarkMode();
            });
        }
    });
});
