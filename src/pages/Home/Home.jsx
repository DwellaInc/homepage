import React from 'react';
import Intro from './Intro/Intro';
import Hero from './Hero/Hero';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer';
import WalkThrough from './WalkThrough/WalkThrough';

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <WhatWeOffer />
      <WalkThrough />
    </>
  );
}
