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
            <img src={facebook} alt="facebook" />
            <p>facebook</p>
          </div>
          <div className="icon-wrapper">
            <img src={instagram} alt="instagram" />
            <p>instagram</p>
          </div>
          <div className="icon-wrapper">
            <img src={google} alt="google" />
            <p>google map</p>
          </div>
          <div className="icon-wrapper">
            <img src={yelp} alt="yelp" />
            <p>yelp</p>
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
