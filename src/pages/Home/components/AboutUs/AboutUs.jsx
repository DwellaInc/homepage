import React from 'react';
import './AboutUs.scss';
import AlexImg from '../../../../assets/images/About-UsArtboard-1.png';
import LucasImg from '../../../../assets/images/About-UsArtboard-2.png';
import GuileImg from '../../../../assets/images/About-UsArtboard-3.png';
import EmployeeImage from '../../../../components/EmployeeCard/EmployeeCard';

export default function AboutUs() {
  const employees = [
    {
      image: AlexImg,
      name: 'Alexander Di Giovanni',
      position: 'Founder and Lawyer',
    },
    { image: GuileImg, name: 'Guile Domingo', position: 'Head of Design' },
    { image: LucasImg, name: 'Lucas Roppo', position: 'Head of Marketing' },
  ];

  return (
    <section className="about-us">
      <h3 className="about-us-title">About Us</h3>
      <div className="about-us-container">
        {employees.map((employee) => {
          return (
            <>
              <EmployeeImage
                image={employee.image}
                name={employee.name}
                position={employee.position}
              />
            </>
          );
        })}
      </div>
      <div className="about-us-text">
        <p>
          We are a team of young professionals who have first-hand experience
          with the difficulties and barriers of investing in real estate. We
          created this platform with the aim of making real estate investing
          accessible to all. Whether you're excited to learn more about the
          movement or want to take part in it, we can't wait to hear from you!
        </p>
      </div>
    </section>
  );
}
