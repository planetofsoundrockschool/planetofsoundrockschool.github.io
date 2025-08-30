---
layout: base.njk
title: "Referral Program"
description: "Refer friends to Planet Of Sound Rock School and earn rewards for building our music community"
eleventyNavigation:
  key: Referrals
  order: 7
---

<!-- Referrals Hero Section -->
<section class="hero-section bg-gradient text-white py-5">
    <div class="container py-5">
        <div class="row align-items-center min-vh-50">
            <div class="col-lg-8 mx-auto text-center">
                <h1 class="display-4 fw-bold mb-4">Share the Music</h1>
                <p class="lead mb-4">Love learning with us? Refer friends and family and earn rewards for spreading the joy of music.</p>
                <div class="hero-badges">
                    <span class="badge bg-warning text-dark me-2 px-3 py-2 fs-6">Earn Credits</span>
                    <span class="badge bg-light text-dark me-2 px-3 py-2 fs-6">Help Friends</span>
                    <span class="badge bg-warning text-dark px-3 py-2 fs-6">Build Community</span>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="py-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center mb-5">
                <h2 class="display-6 text-dark mb-3">How It Works</h2>
                <p class="lead text-muted">Three simple steps to start earning referral rewards</p>
            </div>
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
            
            <div class="row mt-5">
                <div class="col-lg-8 mx-auto">
                    <div class="card border-0 bg-light">
                        <div class="card-body p-4">
                            <h3 class="text-danger mb-3">Submit a Referral</h3>
                            <form name="referral" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="referral" />
                                <p class="hidden">
                                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                                </p>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <label for="yourName" class="form-label">Your Name</label>
                                        <input type="text" class="form-control" id="yourName" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="yourEmail" class="form-label">Your Email</label>
                                        <input type="email" class="form-control" id="yourEmail" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="friendName" class="form-label">Friend's Name</label>
                                        <input type="text" class="form-control" id="friendName" required>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="friendEmail" class="form-label">Friend's Email</label>
                                        <input type="email" class="form-control" id="friendEmail" required>
                                    </div>
                                    <div class="col-12">
                                        <label for="message" class="form-label">Message (Optional)</label>
                                        <textarea class="form-control" id="message" rows="3" placeholder="Tell us why your friend would love Planet Of Sound..."></textarea>
                                    </div>
                                    <div class="col-12 text-center">
                                        <button type="submit" class="btn btn-danger btn-lg">Submit Referral</button>
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
                <a href="/contact/" class="btn btn-outline-danger btn-lg">Contact Us</a>
            </div>
        </div>
    </div>
</div>
