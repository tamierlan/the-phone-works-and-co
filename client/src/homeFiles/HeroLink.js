import React from 'react';
import {Link} from 'react-router-dom';

export default function HeroLink() {
  return (
    <div className="hero-link">
      <div className="section">
        <div className="column">
          <div className="call">
            <a href="tel:+17187824455">call</a>
          </div>
          <div className="call">
            <a>
              <Link to="/contact">address</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
