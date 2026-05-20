import React from 'react';
import { Link } from 'react-router';

const Service = ({ img, isLeft, title, subTitle }) => {
  return (
    <div className={`service-card ${!isLeft ? 'flex-row-reverse' : ''}`}>
      <div className="service-img-wrap">
        <img src={img} alt={title} />
      </div>
      <div className="service-text">
        <h3>{title}</h3>
        <div className="service-accent"></div>
        <p>{subTitle}</p>
        <Link to="/contactus" className="service-cta">
          Contact Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Service;
