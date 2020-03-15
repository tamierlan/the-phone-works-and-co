import React from 'react';
import instagram from '../images/instagram.jpg';
import facebook from '../images/facebook.jpg';
import google from '../images/google.jpg';
import yelp from '../images/yelp.jpg';


export default function Footer() {
  return(
  <footer>
    <div className="section">
      <div className="footer-wrapper">
        <div className="footerone">
          <div className="icon-wrapper">
            <a href="https://www.facebook.com/thephoneworksandcompany">
              <img src={facebook} alt="facebook" />
              <p>facebook</p>
            </a>
          </div>
          <div className="icon-wrapper">
            <a href="https://www.instagram.com/thephoneworksandco">
              <img src={instagram} alt="instagram" />
              <p>instagram</p>
            </a>
          </div>
          <div className="icon-wrapper">
            <a href="https://www.google.com/maps/place/The+Phone+Works+%26+Co+:+iPhone+Screen,+iPad+Screen+%26+Samsung+Screen+Repair+Brooklyn/@40.7177634,-73.9610916,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2595df050dd17:0xd432190d44f538!8m2!3d40.7177634!4d-73.9589029?hl=en">
              <img src={google} alt="google" />
              <p>google map</p>
            </a>
          </div>
          <div className="icon-wrapper">
            <a href="https://www.yelp.com/biz/the-phone-works-and-co-brooklyn?osq=the+phone+works+and+co">
              <img src={yelp} alt="yelp" />
              <p>yelp</p>
            </a>
          </div>
        </div>
        <div className="footertwo">
          <p>133 north 6th st, Brooklyn, NY 11249<br/>718 782 4455<br/><br/>
            198 court st, Brooklyn, NY 11201<br/>718 855 2299<br/><br/>
            open 7-days a week<br/>10am -- 8pm
          </p>
        </div>
      </div>
      <div className="footerthree">
        <p>Copyright # 2019 ThePhoneWorksAndCo.com. all rights reserved.<br/>
          iPhone & iPad Screen Repair<br/>
          ThePhoneWorksAndCo is independent service company and is no way<br/>
          affiliated wit Apple, lnc. All trademarks are properties of<br/>
          their respective holders.
        </p>
      </div>
    </div>
  </footer>
  );
}
