import React from 'react';
import './styles.scss';
import Card from '../../../components/Card/Card';
import { cardInfo } from './info';

export default function WhatWeOffer() {
  return (
    <section className="WWO">
      <h3>What we offer</h3>
      <div className="WWO-cards">
        {cardInfo.map((card) => {
          return (
            <>
              <Card image={card.image} text={card.text} />
            </>
          );
        })}
      </div>
    </section>
  );
}
