/**
 * WCAG AAA Enhanced Accessibility Features
 * Enhanced form validation, contextual help, and user assistance
 */

(function() {
    'use strict';

    // Enhanced form validation and help system
    class AccessibilityEnhancer {
        constructor() {
            this.init();
        }

        init() {
            this.setupFormValidation();
            this.setupContextualHelp();
            this.setupKeyboardNavigation();
            this.setupLoadingStates();
            this.setupErrorHandling();
        }

        setupFormValidation() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                // Add novalidate to prevent browser validation (we handle it)
                form.setAttribute('novalidate', '');
                
                const inputs = form.querySelectorAll('input, textarea, select');
                
                inputs.forEach(input => {
                    // Clear field errors on input (not validation on blur)
                    input.addEventListener('input', () => this.clearFieldError(input));
                    
                    // Enhanced autocomplete
                    this.enhanceAutocomplete(input);
                });
                
                // Form submission
                form.addEventListener('submit', (e) => this.handleFormSubmit(e));
            });
        }

        validateField(field) {
            const value = field.value.trim();
            const type = field.type;
            const required = field.hasAttribute('required');
            
            // Clear previous errors
            this.clearFieldError(field);
            
            let isValid = true;
            let errorMessage = '';
            
            // Required field validation
            if (required && !value) {
                isValid = false;
                const fieldLabel = this.getFieldLabel(field);
                errorMessage = `${fieldLabel.charAt(0).toUpperCase() + fieldLabel.slice(1)} is required.`;
            }
            
            // Type-specific validation
            if (value && type === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address.';
                }
            }
            
            if (value && type === 'tel') {
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number.';
                }
            }
            
            // Name field validation
            if (field.name === 'name' && value) {
                if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Name must be at least 2 characters long.';
                }
            }
            
            // Message field validation
            if (field.name === 'message' && required && value) {
                if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters long to help us understand your needs.';
                }
            }
            
            if (!isValid) {
                this.showFieldError(field, errorMessage);
            }
            
            return isValid;
        }

        clearFieldError(field) {
            field.setAttribute('aria-invalid', 'false');
            field.classList.remove('is-invalid');
            
            const errorId = field.getAttribute('aria-describedby')?.split(' ').find(id => id.includes('error'));
            if (errorId) {
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.textContent = '';
                    errorElement.setAttribute('aria-live', 'off');
                }
            }
        }

        showFieldError(field, message) {
            field.setAttribute('aria-invalid', 'true');
            field.classList.add('is-invalid');
            
            const errorId = field.getAttribute('aria-describedby')?.split(' ').find(id => id.includes('error'));
            if (errorId) {
                const errorElement = document.getElementById(errorId);
                if (errorElement) {
                    errorElement.textContent = message;
                    errorElement.setAttribute('aria-live', 'polite');
                    
                    // Announce error to screen readers
                    setTimeout(() => {
                        errorElement.setAttribute('aria-live', 'assertive');
                        setTimeout(() => {
                            errorElement.setAttribute('aria-live', 'polite');
                        }, 100);
                    }, 100);
                }
            }
        }

        getFieldLabel(field) {
            const label = document.querySelector(`label[for="${field.id}"]`);
            if (label) {
                // Get only the main label text, excluding help icons and other elements
                const labelClone = label.cloneNode(true);
                // Remove help icons and other non-text elements
                const helpIcons = labelClone.querySelectorAll('.help-icon');
                helpIcons.forEach(icon => icon.remove());
                const spans = labelClone.querySelectorAll('span');
                spans.forEach(span => span.remove());
                let labelText = labelClone.textContent.replace('*', '').trim();
                
                // Clean up label text - remove (required) and (Optional) suffixes
                labelText = labelText.replace(/\s*\(required\)\s*$/i, '');
                labelText = labelText.replace(/\s*\(optional\)\s*$/i, '');
                
                // Convert to lowercase for natural error messages
                return labelText.toLowerCase();
            }
            
            // Fallback to field name, converted appropriately
            const fieldName = field.name;
            const fieldNameMap = {
                'yourName': 'your name',
                'yourEmail': 'your email', 
                'friendName': 'your friend\'s name',
                'friendEmail': 'your friend\'s email',
                'name': 'name',
                'email': 'email',
                'message': 'message',
                'program': 'program selection'
            };
            
            return fieldNameMap[fieldName] || fieldName.toLowerCase();
        }

        enhanceAutocomplete(input) {
            // Enhanced autocomplete attributes for better user experience
            const nameMap = {
                'name': 'name',
                'email': 'email',
                'phone': 'tel',
                'subject': 'off',
                'message': 'off'
            };
            
            if (nameMap[input.name] && !input.getAttribute('autocomplete')) {
                input.setAttribute('autocomplete', nameMap[input.name]);
            }
        }

        setupContextualHelp() {
            const helpIcons = document.querySelectorAll('.help-icon');
            
            helpIcons.forEach(icon => {
                // Make help icons keyboard accessible
                icon.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.toggleHelpText(icon);
                    }
                });
                
                icon.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.toggleHelpText(icon);
                });
                
                // Enhanced hover behavior
                icon.addEventListener('mouseenter', () => {
                    this.showTooltip(icon);
                });
                
                icon.addEventListener('mouseleave', () => {
                    this.hideTooltip(icon);
                });
            });
            
            // Remove automatic help text display on focus/blur
            // Help text will only be shown when help icons are explicitly clicked
        }
        
        toggleHelpText(helpIcon) {
            const formGroup = helpIcon.closest('.form-group');
            const helpText = formGroup?.querySelector('.help-text');
            
            if (helpText) {
                const isVisible = helpText.classList.contains('show');
                
                // Hide all other help text first
                document.querySelectorAll('.help-text.show').forEach(text => {
                    text.classList.remove('show');
                });
                
                if (!isVisible) {
                    helpText.classList.add('show');
                    this.announceHelpText(helpText.textContent);
                }
            }
        }
        
        // Removed automatic help text display methods
        // Help text is now only shown via explicit help icon interaction
        
        announceHelpText(text) {
            // Create or update live region for help announcements
            let helpRegion = document.getElementById('contextual-help-live');
            if (!helpRegion) {
                helpRegion = document.createElement('div');
                helpRegion.id = 'contextual-help-live';
                helpRegion.setAttribute('aria-live', 'polite');
                helpRegion.setAttribute('aria-atomic', 'true');
                helpRegion.className = 'visually-hidden';
                document.body.appendChild(helpRegion);
            }
            
            helpRegion.textContent = `Help: ${text}`;
            
            // Clear after announcement
            setTimeout(() => {
                helpRegion.textContent = '';
            }, 3000);
        }

        showContextualHelp(helpIcon) {
            const helpText = helpIcon.getAttribute('aria-label') || helpIcon.getAttribute('title');
            
            // Create or update live region for help announcements
            let helpRegion = document.getElementById('contextual-help-live');
            if (!helpRegion) {
                helpRegion = document.createElement('div');
                helpRegion.id = 'contextual-help-live';
                helpRegion.setAttribute('aria-live', 'polite');
                helpRegion.setAttribute('aria-atomic', 'true');
                helpRegion.className = 'visually-hidden';
                document.body.appendChild(helpRegion);
            }
            
            helpRegion.textContent = `Help: ${helpText}`;
            
            // Clear after announcement
            setTimeout(() => {
                helpRegion.textContent = '';
            }, 3000);
        }

        showTooltip(element) {
            const title = element.getAttribute('title');
            if (!title) return;
            
            // Create tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'aaa-tooltip';
            tooltip.textContent = title;
            tooltip.id = 'aaa-tooltip-' + Date.now();
            
            // Position tooltip
            const rect = element.getBoundingClientRect();
            tooltip.style.cssText = `
                position: absolute;
                top: ${rect.bottom + 8}px;
                left: ${rect.left}px;
                background: #1d4ed8;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 0.375rem;
                font-size: 0.875rem;
                z-index: 10000;
                max-width: 250px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                pointer-events: none;
            `;
            
            document.body.appendChild(tooltip);
            element.setAttribute('aria-describedby', tooltip.id);
        }

        hideTooltip(element) {
            const tooltipId = element.getAttribute('aria-describedby');
            if (tooltipId && tooltipId.includes('aaa-tooltip')) {
                const tooltip = document.getElementById(tooltipId);
                if (tooltip) {
                    tooltip.remove();
                    element.removeAttribute('aria-describedby');
                }
            }
        }

        setupKeyboardNavigation() {
            // Enhanced focus management
            document.addEventListener('keydown', (e) => {
                // Skip links
                if (e.key === 'Tab' && !e.shiftKey) {
                    this.handleTabNavigation(e);
                }
                
                // Help system shortcut
                if (e.key === 'F1' || (e.altKey && e.key === 'h')) {
                    e.preventDefault();
                    this.showContextualHelpInfo();
                }
                
                // Form validation shortcut
                if (e.ctrlKey && e.key === 'Enter') {
                    const focusedElement = document.activeElement;
                    if (focusedElement.form) {
                        e.preventDefault();
                        this.validateForm(focusedElement.form);
                    }
                }
            });
        }

        handleTabNavigation(e) {
            const focusableElements = this.getFocusableElements();
            const currentIndex = focusableElements.indexOf(document.activeElement);
            
            if (currentIndex === -1) return;
            
            // Announce context for screen readers
            const currentElement = focusableElements[currentIndex];
            if (currentElement.tagName === 'INPUT' || currentElement.tagName === 'TEXTAREA') {
                this.announceFieldContext(currentElement);
            }
        }

        getFocusableElements() {
            return Array.from(document.querySelectorAll(
                'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), ' +
                'select:not([disabled]), [tabindex]:not([tabindex="-1"])'
            )).filter(el => {
                return el.offsetWidth > 0 && el.offsetHeight > 0;
            });
        }

        announceFieldContext(field) {
            const helpId = field.getAttribute('aria-describedby');
            if (helpId) {
                const helpElements = helpId.split(' ').map(id => document.getElementById(id)).filter(Boolean);
                const helpTexts = helpElements.map(el => el.textContent).filter(text => text.trim());
                
                if (helpTexts.length > 0) {
                    // Brief delay to let screen reader finish announcing the field
                    setTimeout(() => {
                        const announcement = document.createElement('div');
                        announcement.setAttribute('aria-live', 'polite');
                        announcement.className = 'visually-hidden';
                        announcement.textContent = helpTexts.join('. ');
                        document.body.appendChild(announcement);
                        
                        setTimeout(() => announcement.remove(), 3000);
                    }, 500);
                }
            }
        }

        setupLoadingStates() {
            const forms = document.querySelectorAll('form');
            
            forms.forEach(form => {
                form.addEventListener('submit', () => {
                    const submitBtn = form.querySelector('button[type="submit"]');
                    if (submitBtn) {
                        this.showLoadingState(submitBtn);
                    }
                });
            });
        }

        showLoadingState(button) {
            const originalText = button.innerHTML;
            const spinner = button.querySelector('.loading-spinner');
            
            if (spinner) {
                button.disabled = true;
                button.setAttribute('aria-busy', 'true');
                spinner.classList.remove('d-none');
                spinner.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i>';
                
                // Announce loading state
                const loadingAnnouncement = document.createElement('div');
                loadingAnnouncement.setAttribute('aria-live', 'assertive');
                loadingAnnouncement.className = 'visually-hidden';
                loadingAnnouncement.textContent = 'Sending your message, please wait...';
                document.body.appendChild(loadingAnnouncement);
                
                setTimeout(() => loadingAnnouncement.remove(), 2000);
            }
        }

        setupErrorHandling() {
            // Global form error handling
            window.addEventListener('unhandledrejection', (e) => {
                this.showGlobalError('An unexpected error occurred. Please try again.');
            });
            
            // Network error detection for forms
            document.addEventListener('submit', (e) => {
                if (!navigator.onLine) {
                    e.preventDefault();
                    this.showGlobalError('No internet connection. Please check your connection and try again.');
                }
            });
        }

        showGlobalError(message) {
            // Create or update global error region
            let errorRegion = document.getElementById('global-error-live');
            if (!errorRegion) {
                errorRegion = document.createElement('div');
                errorRegion.id = 'global-error-live';
                errorRegion.setAttribute('aria-live', 'assertive');
                errorRegion.setAttribute('role', 'alert');
                errorRegion.className = 'visually-hidden';
                document.body.appendChild(errorRegion);
            }
            
            errorRegion.textContent = message;
            
            // Clear after announcement
            setTimeout(() => {
                errorRegion.textContent = '';
            }, 5000);
        }

        handleFormSubmit(e) {
            const form = e.target;
            const isValid = this.validateForm(form);
            
            if (!isValid) {
                e.preventDefault();
                
                // Show error summary box
                this.showErrorSummary(form);
            }
        }

        validateForm(form) {
            const fields = form.querySelectorAll('input, textarea, select');
            let isValid = true;
            
            fields.forEach(field => {
                if (!this.validateField(field)) {
                    isValid = false;
                }
            });
            
            return isValid;
        }

        showErrorSummary(form) {
            // Remove any existing error summary
            const existingSummary = form.querySelector('.error-summary');
            if (existingSummary) {
                existingSummary.remove();
            }
            
            // Get all invalid fields
            const invalidFields = form.querySelectorAll('.is-invalid');
            if (invalidFields.length === 0) return;
            
            // Create error summary box
            const errorSummary = document.createElement('div');
            errorSummary.className = 'error-summary alert alert-danger';
            errorSummary.setAttribute('role', 'alert');
            errorSummary.setAttribute('aria-labelledby', 'error-summary-title');
            errorSummary.setAttribute('tabindex', '-1');
            
            // Create title
            const title = document.createElement('h3');
            title.id = 'error-summary-title';
            title.className = 'alert-heading h5 mb-3';
            title.innerHTML = `<i class="fas fa-exclamation-triangle me-2" aria-hidden="true"></i>There ${invalidFields.length === 1 ? 'is' : 'are'} ${invalidFields.length} error${invalidFields.length > 1 ? 's' : ''} with your submission:`;
            
            // Create error list
            const errorList = document.createElement('ul');
            errorList.className = 'mb-0';
            
            invalidFields.forEach(field => {
                const fieldLabel = this.getFieldLabel(field);
                const errorId = field.getAttribute('aria-describedby')?.split(' ').find(id => id.includes('error'));
                const errorElement = errorId ? document.getElementById(errorId) : null;
                const errorMessage = errorElement ? errorElement.textContent : 'This field has an error.';
                
                const listItem = document.createElement('li');
                const errorLink = document.createElement('a');
                errorLink.href = `#${field.id}`;
                errorLink.textContent = errorMessage;
                errorLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    field.focus();
                    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
                
                listItem.appendChild(errorLink);
                errorList.appendChild(listItem);
            });
            
            // Assemble error summary
            errorSummary.appendChild(title);
            errorSummary.appendChild(errorList);
            
            // Insert at top of form
            const formBody = form.querySelector('.row') || form;
            formBody.insertBefore(errorSummary, formBody.firstChild);
            
            // Focus on error summary
            errorSummary.focus();
            
            // Scroll to error summary
            errorSummary.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        showContextualHelpInfo() {
            // Show general help information
            const helpInfo = `
                Keyboard shortcuts: 
                - Press F1 or Alt+H for help
                - Press Tab to navigate between form fields
                - Press Ctrl+Enter to validate the current form
                - Use arrow keys to navigate dropdown options
                
                Form help: Look for ? icons next to form fields for specific guidance.
            `;
            
            this.showGlobalError(helpInfo);
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => new AccessibilityEnhancer());
    } else {
        new AccessibilityEnhancer();
    }

})();
