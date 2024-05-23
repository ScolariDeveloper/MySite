import React from 'react';
import './AboutPage.css';
import Card from '../components/Card';

function AboutPage() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <Card title="Who we are:" par="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"></Card>
    </div>
  );
}

export default AboutPage;
