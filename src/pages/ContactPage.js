import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="card">
        <div className="card-content">
          <h2>Get in Touch</h2>
          <p>
            If you have any questions, feel free to reach out at{' '}
            <a href="mailto:info@mymodernsite.com">info@mymodernsite.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
