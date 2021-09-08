import React from 'react';
import './CTA.scss';
import house from '../../../../assets/images/GetInTouch_House.png';
import Button from '../../../../components/Button/Button';

export default function CTA() {
  return (
    <section className="CTA">
      <div className="CTA-container">
        <img className="CTA-image" src={house} alt="House" />
        <form className="CTA-form">
          <h3>Get in touch with us</h3>
          <div className="CTA-input-container">
            <input className="CTA-input" type="text" placeholder="First name" />
            <input className="CTA-input" type="text" placeholder="Last name" />
          </div>
          <textarea placeholder="Write your message here" />
          <Button type="submit" className="btn btn-primary" text="Send" />
        </form>
      </div>
    </section>
  );
}
