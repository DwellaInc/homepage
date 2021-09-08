import React from 'react';
import './Hero.scss';
import Button from '../../../../components/Button/Button';
import heroImg from '../../../../assets/images/hero-bg.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-message">
        <h1 className="hero-title">Your Share of Your City</h1>
        <h4>
          Dwella is a fast, simple, and affordable way to invest in real estate.
          Join our waitlist to find out how.
        </h4>
        <div className="hero-input-container">
          <input type="text" placeholder="Email address" />
          <Button className="btn-primary hero-button" text="Register" />
        </div>
      </div>
      <img className="hero-image" src={heroImg} alt="People building city" />
    </section>
  );
}
