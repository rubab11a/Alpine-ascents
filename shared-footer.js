document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer, .main-footer');
    if (!footer) return;

    footer.className = 'footer';
    footer.innerHTML = `
        <div class="container">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="footer-logo"><i class="bi bi-mountains"></i><div><b>ALPINE</b><small>ASCENTS</small></div></div>
                    <p>Explore the world of mountaineering. Learn, prepare and discover your next mountain adventure.</p>
                    <div class="social-icons">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener"><i class="bi bi-instagram"></i></a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener"><i class="bi bi-youtube"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5>Quick Links</h5>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.index.html">About</a></li>
                        <li><a href="techniques.index.html">Techniques</a></li>
                        <li><a href="gallery.index.html">Gallery</a></li>
                        <li><a href="records.index.html">Records</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5>Explore</h5>
                    <ul class="footer-links">
                        <li><a href="guidelines.index.html">Safety</a></li>
                        <li><a href="techniques.index.html">Equipment</a></li>
                        <li><a href="guidelines.index.html">Guidelines</a></li>
                        <li><a href="records.index.html">Expeditions</a></li>
                        <li><a href="organizations.index.html">Community</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5>Contact Us</h5>
                    <div class="contact-item"><i class="bi bi-geo-alt"></i><span>Manali, Himachal Pradesh, India</span></div>
                    <div class="contact-item"><i class="bi bi-envelope"></i><span>info@peakexpeditions.com</span></div>
                    <div class="contact-item"><i class="bi bi-telephone"></i><span>+91 98765 43210</span></div>
                </div>
            </div>
            <div class="footer-bottom"><span>© 2025 Alpine Ascents. All Rights Reserved.</span><span>Explore • Climb • Conquer</span></div>
        </div>`;
});
