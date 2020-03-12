import React from 'react';
import HeroLink from '../homeFiles/HeroLink';
import Hero from '../homeFiles/Hero';
import Banner from '../homeFiles/Banner';
import Footer from '../homeFiles/Footer';
import FooterTop from '../homeFiles/Footertop';

export default function Error() {
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
        <HeroLink />
      </Hero>
      <FooterTop />
      <Footer />
    </>
  );
}
