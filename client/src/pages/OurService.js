import React from 'react';
import Hero from '../homeFiles/Hero';
import Banner from '../homeFiles/Banner';
import HeroLink from '../homeFiles/HeroLink';
import OurServiceOne from '../ourServiceFiles/OurServiceOne';
import OurServiceTwo from '../ourServiceFiles/OurServiceTwo';
import FooterTop from '../homeFiles/Footertop';
import Footer from '../homeFiles/Footer';

export default function OurService() {
  return (
    <>
      <Hero hero="homeHero">
        <Banner
          title="the"
          subtitle="phone works and co"
        >
        <h4 className="banner-children">walk-ins welcome! a sertified technician will fix your device on the spot.
        most of the repair takes 15 min.</h4>
        </Banner>
        <div className="ourservice-link">
          <HeroLink />
        </div>
      </Hero>
      <OurServiceOne />
      <OurServiceTwo />
      <FooterTop />
      <Footer />
    </>
  );
}
