import React from 'react';
import Hero from '../homeFiles/Hero';
import Banner from '../homeFiles/Banner';
import HeroLink from '../homeFiles/HeroLink';
import HomeOne from '../homeFiles/HomeOne';
import HomeTwo from '../homeFiles/HomeTwo';
import Map from '../homeFiles/Map';
import FooterTop from '../homeFiles/Footertop';
import Footer from '../homeFiles/Footer';

export default function Home() {
  return (
    <>
      <Hero hero='homeHero'>
        <Banner
          title="the"
          subtitle="phone works and co"
        >
        <h3 className="banner-children">walk-ins welcome! a sertified
          technician will fix your device on the spot.
          most of the repair takes 15 min.
        </h3>
        </Banner>
        <HeroLink />
      </Hero>
      <HomeOne />
      <div className="burgundy-line" />
      <HomeTwo />
      <div className="burgundy-line" />
      <Map />
      <FooterTop />
      <Footer />
    </>
  );
}
