---
layout: base.njk
title: "Referral Program"
description: "Refer friends to Planet Of Sound Rock School and earn rewards for building our music community"
eleventyNavigation:
  key: Referrals
  order: 7
---

<!-- Referrals Hero Section -->
<section class="hero">
    <!-- Floating Music Icons -->
    <div class="position-absolute" style="top: 15%; left: 8%; font-size: 2rem; opacity: 0.6; z-index: 3;">
        <i class="fas fa-music hero-float-1"></i>
    </div>
    <div class="position-absolute" style="top: 25%; right: 12%; font-size: 1.5rem; opacity: 0.4; z-index: 3;">
        <i class="fas fa-guitar hero-float-2"></i>
    </div>
    <div class="position-absolute" style="bottom: 30%; left: 15%; font-size: 1.8rem; opacity: 0.5; z-index: 3;">
        <i class="fas fa-drum hero-float-3"></i>
    </div>
    
    <div class="container">
        <div class="row align-items-center min-vh-75">
            <div class="col-lg-8 mx-auto text-center">
                <h1 class="mb-4">Share the Music</h1>
                <p class="mb-4">Refer Friends and Earn</p>
                <div class="d-flex flex-wrap justify-content-center gap-3">
                    <a href="#referral-form" class="btn btn-primary btn-lg">Refer Someone Now</a>
                    <a href="#how-it-works" class="btn btn-outline-light btn-lg">How It Works</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="how-it-works" class="section section-alt">
    <div class="container">
        <div class="section-header">
            <h2>How It Works</h2>
            <p>Three simple steps to start earning referral rewards</p>
        </div>
            
            <div class="row g-4">
                <div class="col-md-6">
                    <div class="card h-100 border-danger">
                        <div class="card-header bg-danger text-white">
                            <h3 class="mb-0">How It Works</h3>
                        </div>
                        <div class="card-body">
                            <ol class="list-group list-group-numbered">
                                <li class="list-group-item border-0 bg-transparent">Refer a friend to Planet Of Sound Rock School</li>
                                <li class="list-group-item border-0 bg-transparent">They book and complete their first paid lesson or program</li>
                                <li class="list-group-item border-0 bg-transparent">You both receive referral credits!</li>
                                <li class="list-group-item border-0 bg-transparent">Use credits toward future lessons or programs</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="card h-100 border-warning">
                        <div class="card-header bg-warning text-dark">
                            <h3 class="mb-0">Referral Rewards</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled">
                                <li class="mb-3"><strong class="text-danger">You Get:</strong> $25 credit toward future lessons</li>
                                <li class="mb-3"><strong class="text-danger">They Get:</strong> $15 off their first program or lesson package</li>
                                <li class="mb-3"><strong class="text-danger">No Limit:</strong> Refer as many friends as you want!</li>
                                <li class="mb-3"><strong class="text-danger">Community Building:</strong> Help create London's strongest music network</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

<section id="referral-form" class="section section-bg">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto">
                <div class="card border-0 shadow-custom">
                    <div class="card-body p-4">
                        <h3 class="text-primary mb-3 text-center">Submit a Referral</h3>
                        <form name="referral" method="POST" data-netlify="true" netlify-honeypot="bot-field" aria-label="Referral submission form">
                            <input type="hidden" name="form-name" value="referral" />
                            <p class="visually-hidden">
                                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                            </p>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="yourName" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="yourName" name="yourName" required aria-describedby="your-name-help">
                                    <div id="your-name-help" class="visually-hidden">Enter your full name for referral credit</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="yourEmail" class="form-label">Your Email</label>
                                    <input type="email" class="form-control" id="yourEmail" name="yourEmail" required aria-describedby="your-email-help">
                                    <div id="your-email-help" class="visually-hidden">Enter your email address to receive referral credit notification</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="friendName" class="form-label">Friend's Name</label>
                                    <input type="text" class="form-control" id="friendName" name="friendName" required aria-describedby="friend-name-help">
                                    <div id="friend-name-help" class="visually-hidden">Enter your friend's full name</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="friendEmail" class="form-label">Friend's Email</label>
                                    <input type="email" class="form-control" id="friendEmail" name="friendEmail" required aria-describedby="friend-email-help">
                                    <div id="friend-email-help" class="visually-hidden">Enter your friend's email address so we can contact them</div>
                                </div>
                                <div class="col-12">
                                    <label for="message" class="form-label">Message (Optional)</label>
                                    <textarea class="form-control" id="message" name="message" rows="3" placeholder="Tell us why your friend would love Planet Of Sound..." aria-describedby="message-help"></textarea>
                                    <div id="message-help" class="visually-hidden">Optional: Share why you think your friend would enjoy our programs</div>
                                </div>
                                <div class="col-12 text-center">
                                    <button type="submit" class="btn btn-danger btn-lg">
                                        <i class="fas fa-paper-plane me-2" aria-hidden="true"></i>Submit Referral
                                    </button>
                                </div>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-5">
                <div class="col-12">
                    <div class="alert alert-info">
                        <h5 class="alert-heading">Referral Terms</h5>
                        <ul class="mb-0">
                            <li>Referral credits are applied after the referred student completes their first paid session</li>
                            <li>Credits are non-transferable and must be used within 12 months</li>
                            <li>Credits can be combined with sliding scale pricing</li>
                            <li>Both parties must be in good standing with Planet Of Sound Rock School</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        <div class="text-center mt-4">
            <p class="lead">Questions about our referral program?</p>
            <a href="/contact/" class="btn btn-outline-primary btn-lg">Contact Us</a>
        </div>
    </div>
</section>
