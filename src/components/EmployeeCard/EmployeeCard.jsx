import React from 'react';
import './EmployeeCard.scss';

export default function EmployeeImage({ image, name, position }) {
  return (
    <div className="employee-card">
      <img className="employee-card-image" src={image} alt={name} />
      <h4>{name}</h4>
      <h4>{position}</h4>
    </div>
  );
}
