import React from 'react';
import './styles.scss';
import Button from '../../../components/Button/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="message-wrap">
        <h1>Your Share of Your City</h1>
        <h4>
          Dwella is a fast, simple, and affordable way to invest in real estate.
          Join our waitlist to find out how.
        </h4>
        <div className="input-container">
          <input type="text" placeholder="Email address" />
          <Button className="btn-primary" text="Register" />
        </div>
      </div>
    </section>
  );
}
