import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo/dwella-logo.png';

export default function Footer() {
  return (
    <section className="footer">
      <img className="logo" src={logo} alt="Dwella Logo" />
      <div>
        <p>Toronto, ON, Canada</p>
        <p>647-237-1286</p>
        <a href="mailto:dwellainvesting@gmail.com">dwellainvesting@gmail.com</a>
      </div>
    </section>
  );
}
