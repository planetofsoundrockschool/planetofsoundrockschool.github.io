---
layout: base.njk
title: "Home"
description: "Planet Of Sound Rock School - Mentorship-based music school in London, Ontario. From your first chord to your first tour."
eleventyNavigation:
  key: Home
  order: 1
---

<!-- Preview Test Banner - Only shows on Netlify preview deployments -->
{% if env.isPreview %}
<div class="alert alert-info text-center mb-0 rounded-0" style="background: linear-gradient(45deg, #17a2b8, #007bff); color: white; font-weight: bold;">
    <i class="fas fa-eye me-2"></i>🚀 NETLIFY PREVIEW - This is a preview deployment ({{ env.context }}) 🚀
</div>
{% endif %}

<!-- Hero Section -->
<section id="hero" class="hero d-flex align-items-center">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <h1>
                    From Your First Chord<br>
                    <span class="text-gradient">To Your First Tour</span>
                </h1>
                <p>
                    Mentorship-based music education in London, Ontario.<br>
                    <strong>All Ages • All Stages • Learn. Collaborate. Play Live.</strong>
                </p>
                <div class="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                    <a href="#contact" class="btn btn-primary btn-lg">
                        <i class="fas fa-calendar-alt me-2"></i>Book Free Discovery Call
                    </a>
                    <a href="#programs" class="btn btn-outline-light btn-lg">
                        <i class="fas fa-users me-2"></i>Explore Programs
                    </a>
                </div>
                <div class="mt-4">
                    <span class="badge bg-light text-dark me-2 px-3 py-2">Fall 2025 Enrollment Open</span>
                    <span class="badge bg-light text-dark px-3 py-2">4-Tier Program System</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Floating Music Icons -->
    <div class="position-absolute top-50 start-0 translate-middle-y d-none d-lg-block hero-float-1" style="left: 8% !important;">
        <i class="fas fa-guitar fa-3x opacity-25"></i>
    </div>
    <div class="position-absolute top-25 end-0 d-none d-lg-block hero-float-2" style="right: 8% !important;">
        <i class="fas fa-microphone fa-2x opacity-25"></i>
    </div>
    <div class="position-absolute bottom-25 start-0 d-none d-lg-block hero-float-3" style="left: 12% !important;">
        <i class="fas fa-drum fa-2x opacity-25"></i>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section section-bg">
    <div class="container">
        <div class="section-header">
            <h2>About Planet of Sound Rock School</h2>
            <p>Mentorship-based music education in London, Ontario, designed to take you from your first chord to your first tour</p>
        </div>
        
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h3 class="mb-4">Our Mission</h3>
                <p class="lead mb-4">We believe music education should be practical, collaborative, and fun. Our four-tier program system grows with you, from absolute beginner to touring professional.</p>
                
                <div class="row g-4">
                    <div class="col-6">
                        <div class="text-center">
                            <i class="fas fa-users fa-2x text-primary mb-2"></i>
                            <h4>All Ages</h4>
                            <p class="text-muted small">From kids to adults</p>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="text-center">
                            <i class="fas fa-graduation-cap fa-2x text-primary mb-2"></i>
                            <h4>All Levels</h4>
                            <p class="text-muted small">Beginner to advanced</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="stats row text-center">
                    <div class="col-4">
                        <div class="stats-item">
                            <i class="fas fa-music"></i>
                            <h3>4</h3>
                            <p>Program Tiers</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="stats-item">
                            <i class="fas fa-clock"></i>
                            <h3>8+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="stats-item">
                            <i class="fas fa-star"></i>
                            <h3>100+</h3>
                            <p>Students Taught</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Programs Section -->
<section id="programs" class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2>Our Four-Tier Program System</h2>
            <p>Progressive music education that grows with your skills and ambitions</p>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-3 col-md-6 d-flex">
                <div class="card h-100 hover-lift w-100">
                    <div class="card-body text-center d-flex flex-column">
                        <div class="mb-3">
                            <i class="fas fa-play-circle fa-3x text-primary"></i>
                        </div>
                        <h3 class="card-title text-primary">Learn To Play</h3>
                        <p class="card-text flex-grow-1">Foundation skills for beginners. Learn chords, scales, rhythm, and song structure in supportive 1-on-1 or small group settings.</p>
                        <div class="mt-auto">
                            <p class="fw-bold fs-5 text-dark mb-3">$400 <small class="text-muted">(8 weeks)</small></p>
                            <a href="/programs/#learn-to-play" class="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <div class="card h-100 hover-lift w-100">
                    <div class="card-body text-center d-flex flex-column">
                        <div class="mb-3">
                            <i class="fas fa-users fa-3x text-primary"></i>
                        </div>
                        <h3 class="card-title text-primary">Bandstarter</h3>
                        <p class="card-text flex-grow-1">Collaborative music-making! Learn songwriting, rehearsal flow, gear literacy, and band dynamics in small groups.</p>
                        <div class="mt-auto">
                            <p class="fw-bold fs-5 text-dark mb-3">$500 <small class="text-muted">per student</small></p>
                            <a href="/programs/#bandstarter" class="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <div class="card h-100 hover-lift w-100">
                    <div class="card-body text-center d-flex flex-column">
                        <div class="mb-3">
                            <i class="fas fa-microphone fa-3x text-primary"></i>
                        </div>
                        <h3 class="card-title text-primary">Show Ready</h3>
                        <p class="card-text flex-grow-1">Performance preparation! Master live setup, stage communication, setlist building, and commanding stage presence.</p>
                        <div class="mt-auto">
                            <p class="fw-bold fs-5 text-dark mb-3">$600 <small class="text-muted">per student</small></p>
                            <a href="/programs/#show-ready" class="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 d-flex">
                <div class="card h-100 hover-lift w-100">
                    <div class="card-body text-center d-flex flex-column">
                        <div class="mb-3">
                            <i class="fas fa-route fa-3x text-primary"></i>
                        </div>
                        <h3 class="card-title text-primary">Tour</h3>
                        <p class="card-text flex-grow-1">Professional touring readiness. Learn tour planning, stage plots, tech riders, and industry navigation.</p>
                        <div class="mt-auto">
                            <p class="fw-bold fs-5 text-dark mb-3">$300+ <small class="text-muted">per event</small></p>
                            <a href="/programs/#tour" class="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row mt-5">
            <div class="col-12 text-center">
                <p class="text-muted mb-4"><em>Sliding scale and payment plans available for all programs</em></p>
                <a href="/programs/" class="btn btn-primary btn-lg">
                    <i class="fas fa-arrow-right me-2"></i>View Detailed Programs
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose Us Section -->
<section id="why-choose-us" class="section section-bg">
    <div class="container">
        <div class="section-header">
            <h2>Why Choose Planet of Sound?</h2>
            <p>More than just lessons – we're building London's next generation of musicians</p>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-4">
                <div class="text-center">
                    <div class="mb-4">
                        <i class="fas fa-handshake fa-4x text-primary"></i>
                    </div>
                    <h3>Mentorship Approach</h3>
                    <p class="text-muted">Personal guidance from experienced musicians who've been where you want to go. We don't just teach – we mentor.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="text-center">
                    <div class="mb-4">
                        <i class="fas fa-route fa-4x text-primary"></i>
                    </div>
                    <h3>Clear Progression Path</h3>
                    <p class="text-muted">Our four-tier system provides clear milestones and goals, taking you from beginner to professional touring artist.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="text-center">
                    <div class="mb-4">
                        <i class="fas fa-heart fa-4x text-primary"></i>
                    </div>
                    <h3>Community Focus</h3>
                    <p class="text-muted">Join London's vibrant music community. Connect with other musicians, play shows, and build lasting relationships.</p>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-lg-8 mx-auto">
                <div class="card border-0 shadow-lg">
                    <div class="card-body p-4 text-center">
                        <h4 class="text-primary mb-3">Individual Lessons & Recording Services</h4>
                        <div class="row">
                            <div class="col-md-6">
                                <h5 class="mb-3">Lesson Options</h5>
                                <ul class="list-unstyled text-start">
                                    <li><strong>Private Lessons:</strong> $50/hour</li>
                                    <li><strong>Semi-Private:</strong> $35/hour each</li>
                                    <li><strong>Band Coaching:</strong> $75/hour</li>
                                    <li><strong>Gear Setup:</strong> $60/hour</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <h5 class="mb-3">Recording Studio</h5>
                                <p class="text-muted">Live off the floor recording for demos and booking materials. Professional sound in a comfortable environment.</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <a href="/pricing/" class="btn btn-outline-primary me-2">View All Pricing</a>
                            <a href="/recording/" class="btn btn-outline-primary">Recording Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section id="faq" class="section">
    <div class="container">
        <div class="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about getting started with Planet of Sound Rock School</p>
        </div>
        
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="accordion" id="faqAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                What makes Planet Of Sound different from other music schools?
                            </button>
                        </h2>
                        <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                We're a mentorship-based school that focuses on real-world music skills. Our four-tier system takes you from your first chord to being tour-ready. We emphasize community building, gear literacy, and practical experience that you can't get from traditional music lessons.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                Do I need to own an instrument to start?
                            </button>
                        </h2>
                        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                No! We have instruments available for use during lessons and can help you find the right instrument when you're ready to purchase. We also offer gear orientation sessions to help you understand equipment basics.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                                What age groups do you teach?
                            </button>
                        </h2>
                        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                We welcome students of all ages! Our programs are designed to be inclusive and adaptable. Whether you're 8 or 80, we'll create a learning experience that works for you.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                                How does the four-tier system work?
                            </button>
                        </h2>
                        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                <strong>Learn To Play:</strong> Foundation skills and basics<br>
                                <strong>Bandstarter:</strong> Collaboration and songwriting<br>
                                <strong>Show Ready:</strong> Performance and stage presence<br>
                                <strong>Tour:</strong> Professional touring preparation<br><br>
                                You don't have to go through every tier - we'll help you find the right starting point based on your experience and goals.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                                What about sliding scale pricing?
                            </button>
                        </h2>
                        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                We believe music education should be accessible to everyone. We offer sliding scale pricing and payment plans based on individual circumstances. Contact us to discuss options that work for your budget.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                                Can I book a trial lesson?
                            </button>
                        </h2>
                        <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                Absolutely! We offer free discovery calls to help you find the right program. During this call, we'll discuss your goals, experience level, and which tier might be the best fit for you.
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-5">
                    <p class="mb-3">Have a question not covered here?</p>
                    <a href="#contact" class="btn btn-primary btn-lg">
                        <i class="fas fa-comments me-2"></i>Ask Us Directly
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section contact">
    <div class="container">
        <div class="section-header">
            <h2>Get Started Today</h2>
            <p>Ready to begin your musical journey? Let's talk about your goals and find the perfect program for you.</p>
        </div>
        
        <div class="row g-4">
            <div class="col-lg-6">
                <div class="contact-info">
                    <h3 class="mb-4">Let's Connect</h3>
                    
                    <div class="contact-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>London, Ontario<br>Near Downtown</p>
                        </div>
                    </div>
                    
                    <div class="contact-info-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>hello@planetofsoundrockschool.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-info-item">
                        <i class="fab fa-instagram"></i>
                        <div>
                            <h4>Instagram</h4>
                            <p>@planetofsoundrockschool</p>
                        </div>
                    </div>
                    
                    <div class="mt-4">
                        <a href="/contact/" class="btn btn-primary">
                            <i class="fas fa-arrow-right me-2"></i>Full Contact Information
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="col-lg-6">
                <div class="contact-form">
                    <h3 class="mb-4">Quick Inquiry</h3>
                    <form name="homepage-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="homepage-contact" />
                        <p class="hidden">
                            <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                        </p>
                        
                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Name *</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email *</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                            </div>
                            <div class="col-12">
                                <label for="program" class="form-label">Interested In</label>
                                <select class="form-control" id="program" name="program">
                                    <option value="">Select a program...</option>
                                    <option value="learn-to-play">Learn To Play</option>
                                    <option value="bandstarter">Bandstarter</option>
                                    <option value="show-ready">Show Ready</option>
                                    <option value="tour">Tour Program</option>
                                    <option value="individual">Individual Lessons</option>
                                    <option value="recording">Recording Services</option>
                                    <option value="other">Other/Not Sure</option>
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" name="message" rows="4" placeholder="Tell us about your musical goals and experience level..."></textarea>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary w-100">
                                    <i class="fas fa-paper-plane me-2"></i>Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Newsletter Section -->
<section class="section bg-gradient-primary text-white">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
                <h2 class="mb-3">Stay in the Loop</h2>
                <p class="mb-4 fs-5">Get updates on programs, student showcases, and London's music community events.</p>
                
                <form name="homepage-newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="row g-2 justify-content-center">
                    <input type="hidden" name="form-name" value="homepage-newsletter" />
                    <p class="hidden">
                        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <div class="col-auto">
                        <input type="email" name="email" class="form-control form-control-lg" placeholder="Enter your email" required style="min-width: 280px;">
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-light btn-lg text-primary fw-bold">
                            <i class="fas fa-envelope me-2"></i>Subscribe
                        </button>
                    </div>
                </form>
                
                <small class="d-block mt-3 opacity-75">We respect your privacy. Unsubscribe at any time.</small>
            </div>
        </div>
    </div>
</section>

<!-- Back to Top Button -->
<button type="button" class="btn back-to-top" id="back-to-top">
    <i class="fas fa-chevron-up"></i>
</button>
