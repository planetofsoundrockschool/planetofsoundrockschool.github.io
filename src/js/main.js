/**
 * Planet of Sound Rock School - Main JavaScript
 * Nexa-inspired modern interactions and smooth scrolling
 */

(function() {
    'use strict';

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)];
        } else {
            return document.querySelector(el);
        }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all);
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener));
            } else {
                selectEl.addEventListener(type, listener);
            }
        }
    };

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .nav-link', true);
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return;
            let section = select(navbarlink.hash);
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active');
            } else {
                navbarlink.classList.remove('active');
            }
        });
    };
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header');
        let offset = header.offsetHeight;

        if (!header.classList.contains('header-scrolled')) {
            offset -= 16;
        }

        let elementPos = select(el).offsetTop;
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        });
    };

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header');
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled');
            } else {
                selectHeader.classList.remove('header-scrolled');
            }
        };
        window.addEventListener('load', headerScrolled);
        onscroll(document, headerScrolled);
    }

    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top');
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 300) {
                backtotop.classList.add('active');
            } else {
                backtotop.classList.remove('active');
            }
        };
        window.addEventListener('load', toggleBacktotop);
        onscroll(document, toggleBacktotop);
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
        e.preventDefault();
        const navbar = select('#navbar');
        const icon = this.querySelector('i');
        
        navbar.classList.toggle('navbar-mobile');
        
        // Toggle icon between bars and times
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('dropdown-active');
        }
    }, true);

    /**
     * Scroll with offset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
                scrollto(window.location.hash);
            }
        }
    });

    /**
     * Close mobile nav when clicking on navbar links
     */
    on('click', '.navbar a', function(e) {
        const navbar = select('#navbar');
        if (navbar.classList.contains('navbar-mobile')) {
            navbar.classList.remove('navbar-mobile');
            const toggleIcon = select('.mobile-nav-toggle i');
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-times');
                toggleIcon.classList.add('fa-bars');
            }
        }
    }, true);

    /**
     * Close mobile nav when clicking outside
     */
    document.addEventListener('click', function(e) {
        const navbar = select('#navbar');
        const mobileToggle = select('.mobile-nav-toggle');
        
        if (navbar && navbar.classList.contains('navbar-mobile')) {
            // Check if click is outside navbar and toggle button
            if (!navbar.contains(e.target) && !mobileToggle.contains(e.target)) {
                navbar.classList.remove('navbar-mobile');
                const toggleIcon = select('.mobile-nav-toggle i');
                if (toggleIcon) {
                    toggleIcon.classList.remove('fa-times');
                    toggleIcon.classList.add('fa-bars');
                }
            }
        }
    });

    /**
     * Smooth scroll for anchor links
     */
    on('click', 'a[href*="#"]:not([href="#"])', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            let target = select(this.hash);
            if (target) {
                e.preventDefault();
                scrollto(this.hash);

                // Close mobile nav if open
                const navbar = select('#navbar');
                if (navbar.classList.contains('navbar-mobile')) {
                    navbar.classList.remove('navbar-mobile');
                    const toggleIcon = select('.mobile-nav-toggle i');
                    if (toggleIcon) {
                        toggleIcon.classList.remove('fa-times');
                        toggleIcon.classList.add('fa-bars');
                    }
                }
            }
        }
    }, true);

    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    /**
     * Hero typed text effect
     */
    const typed = select('.typed');
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

})();
