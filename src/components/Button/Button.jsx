import React from 'react';

export default function Button({ className, clickHandler, text, link }) {
  if (className === 'btn btn-nav') {
    <a href={link} target="_blank" rel="noreferrer" className={className}>
      {text}
    </a>;
  }
  return (
    <button className={className} onClick={clickHandler}>
      {text}
    </button>
  );
}
