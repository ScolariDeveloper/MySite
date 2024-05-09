import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to My Modern Site</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        vitae convallis nunc.
      </p>
      <Link to="/about" className="button">
        Learn More
      </Link>
    </div>
  );
}

export default HomePage;
