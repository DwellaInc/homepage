import React from 'react';
import './styles.scss';
import NumberAndTitle from '../NumberAndTitle/NumberAndTitle';

export default function TextWithImage({
  text,
  image,
  number,
  title,
  background,
}) {
  if (background === 'grey') {
    return (
      <div className="TWI TWI-grey">
        <img className="TWI-image" src={image} alt={title} />
        <div className="TWI-text">
          <NumberAndTitle number={number} title={title} />
          <p>{text}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="TWI">
      <div className="TWI-text">
        <NumberAndTitle number={number} title={title} />
        <p>{text}</p>
      </div>
      <img className="TWI-image" src={image} alt={title} />
    </div>
  );
}
