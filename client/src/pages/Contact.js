import React from 'react';
import HeroLink from '../homeFiles/HeroLink';
import Hero from '../homeFiles/Hero';
import Banner from '../homeFiles/Banner';
import ContactOne from '../contactFiles/ContactOne';
import Mail from '../contactFiles/Mail';
import Map from '../homeFiles/Map';
import ContactThree from '../contactFiles/ContactThree';
import Footer from '../homeFiles/Footer';
import FooterTop from '../homeFiles/Footertop';

export default function Contact() {
  return (
    <>
      <Hero hero="homeHero">
        <Banner
          title="the"
          subtitle="phone works and co"
        >
        <h3 className="banner-children">walk-ins welcome! a sertified technician will fix your device on the spot.
        most of the repair takes 15 min.</h3>
        </Banner>
      </Hero>
      <ContactOne />
      <div className="contact-two">
        <Mail />
        <Map />
      </div>
      <ContactThree />
      <FooterTop />
      <Footer />
    </>
  );
}
