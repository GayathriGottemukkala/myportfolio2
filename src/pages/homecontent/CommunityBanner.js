

function CommunityBanner() {
  return (
    <section className="community-section">
      <div className="community-container">
        <div className="community-text">
          <h2>Join Streelancer Community !</h2>
          <p>
            A safe space to learn, share, and grow — built for women, queer talent, and second-career professionals.
          </p>
          <button className="join-btn">Join Community</button>
        </div>
        <div className="community-image">
          <img src={require("../../images/footer.png")} alt="Community" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <h3>Streelancer</h3>
          <p>India’s largest women-first platform for inclusive career building.</p>
          <div className="social-icons">
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fas fa-times"></i>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Platform</h4>
            <ul>
              <li>Academy</li>
              <li>Marketplace</li>
              <li>CXO On Demand</li>
              <li>Community</li>
              <li>DEI Benchmark</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Subscribe</h4>
            <p>Get the latest updates and offers.</p>
            <form>
              <input type="email" placeholder="Your email" />
              <button type="submit">Subscribe</button>
              <p className="privacy-text">
                By subscribing, you agree to our <a href="/">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default CommunityBanner;
