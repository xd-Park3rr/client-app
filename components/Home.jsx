import React from 'react';
import ContactUsForm from './ContactUsForm';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-image-container">
        <div className="text-container">
          <h1>Starting at R600 a month</h1>
          <p>Welcome to your business' future. Explore the world of technology by applying for a business website today!</p>
          <p>If you want to apply for a website, fill out the contact us form and we will be in touch!</p>
        </div>
        <div className="hero-image">
          <img src="path/to/your/placeholder-image.jpg" alt="Hero" />
        </div>
      </div>

      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>Custom Website Design</li>
          <li>SEO Optimization</li>
          <li>Mobile Responsiveness</li>
          <li>24/7 Customer Support</li>
          <li>Secure Hosting Solutions</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          "Thanks to WebDevPro, my business has grown exponentially! The website is beautiful and functional." - Jane Doe
        </blockquote>
        <blockquote>
          "The team was professional and delivered on time. Highly recommend!" - John Smith
        </blockquote>
      </section>

      <section className="call-to-action">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today and let's build your dream website together!</p>
        <div className="contact-section">
          <ContactUsForm />
          <div className="find-us">
            <h2>Find Us</h2>
            <p>123 WebDev Street</p>
            <p>Tech City, TC 12345</p>
            <p>Email: contact@webdevpro.com</p>
            <p>Phone: (123) 456-7890</p>

            <h3>Follow Us</h3>
            <div className="social-links">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="path/to/instagram-icon.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="path/to/linkedin-icon.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="path/to/github-icon.png" alt="GitHub" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="path/to/facebook-icon.png" alt="Facebook" />
                </a>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;