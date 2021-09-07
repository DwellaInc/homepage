import React from 'react';
import Intro from './components/Intro/Intro';
import Hero from './components/Hero/Hero';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';
import WalkThrough from './components/WalkThrough/WalkThrough';
import HowWeDoIt from './components/HowWeDoIt/HowWeDoIt';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeOffer />
      <WalkThrough />
      <HowWeDoIt />
    </>
  );
}
