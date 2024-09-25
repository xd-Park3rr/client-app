import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="path/to/facebook-icon.png" alt="Facebook" className="social-icon" />
                        Facebook
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="path/to/twitter-icon.png" alt="Twitter" className="social-icon" />
                        Twitter
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="path/to/instagram-icon.png" alt="Instagram" className="social-icon" />
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="path/to/linkedin-icon.png" alt="LinkedIn" className="social-icon" />
                        LinkedIn
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="path/to/youtube-icon.png" alt="YouTube" className="social-icon" />
                        YouTube
                    </a>
                </div>
                <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;