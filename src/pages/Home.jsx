import React from 'react';

// components
import Hero from '../components/Hero';
import Institution from '../components/Institution';
import VideoLoop from '../components/VideoLoop';
import CtaBlock from '../components/CtaBlock';

const Home = () => {
  return (
    <section>
      <Hero />
      <Institution />
      <VideoLoop />
      <CtaBlock />
    </section>
  );
};

export default Home;
