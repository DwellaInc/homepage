import React, { useState } from 'react';
import './Header.scss';
import logo from '../../assets/logo/dwella-logo.png';
import Button from '../Button/Button';
import hamburger from '../../assets/images/hamburger.svg';
import close from '../../assets/images/close-icon.svg';

export default function Header() {
  const [openDropdown, setOpenDrowpdown] = useState(false);
  const [dropdownClass, setDropdownClass] = useState('hidden');

  const links = [
    { title: 'About Us', link: '#' },
    { title: 'How It Works', link: '#' },
    { title: 'For Builders', link: '#' },
    { title: 'Survey', link: '#' },
  ];

  const handleOpenDropdown = () => {
    setOpenDrowpdown(!openDropdown);

    if (dropdownClass === 'hidden') {
      setDropdownClass('header-dropdown');
    } else {
      setDropdownClass('hidden');
    }
  };

  return (
    <section className="header">
      <div className="header-container">
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
        <img
          className="header-hamburger"
          src={openDropdown ? close : hamburger}
          alt="Hamburger menu"
          onClick={() => handleOpenDropdown()}
        />
      </div>
      <div className={dropdownClass}>
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
