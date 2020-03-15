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
        <a href="https://www.google.com/maps/place/The+Phone+Works+%26+Co+:+iPhone+Screen,+iPad+Screen+%26+Samsung+Screen+Repair+Brooklyn/@40.7177634,-73.9610916,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595df050dd17:0xd432190d44f538!8m2!3d40.7177634!4d-73.9589029?hl=en">
          <p><img src={google} /></p>
        </a>
        <a href="https://www.yelp.com/biz/the-phone-works-and-co-brooklyn?osq=the+phone+works+and+co">
          <p><img src={yelp} /></p>
        </a>
        <p>we are on yelp</p>
      </div>
    </div>
  );
}
