import React from 'react';
import './Header.scss';
import logo from '../../assets/logo/dwella-logo.png';
import Button from '../Button/Button';

export default function Header() {
  const links = [
    { title: 'About Us', link: '' },
    { title: 'How It Works', link: '' },
    { title: 'For Builders', link: '' },
    { title: 'Survey', link: '' },
  ];
  return (
    <section className="header">
      <img className="logo" src={logo} alt="Dwella Logo" />
      <div className="button-container">
        {links.map((link) => {
          return (
            <>
              <Button className="btn-nav" text={link.title} />
            </>
          );
        })}
        <div className="button-wrap">
          <Button className="btn-primary" text="Register" />
        </div>
      </div>
    </section>
  );
}
