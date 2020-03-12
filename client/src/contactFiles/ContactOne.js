import React from 'react';
import google from '../images/google.jpg';
import yelp from '../images/yelp.jpg';

export default function ContactOne() {
  return (
    <div className="contact-one">
      <h1 className="text-title">Contact Us</h1>
      <p className="text-title">thephoneworksandco@gmail.com</p>
      <h4>133 north 6th st. brookyn, ny 11249</h4>
      <button><a href="tel:+17187824455">call us:<br/>(718) 782 4455</a></button>

      <div className="google-yelp">
        <p>google us</p>
        <p><img src={google} /></p>
        <p><img src={yelp} /></p>
        <p>we are on yelp</p>
      </div>
    </div>
  );
}
