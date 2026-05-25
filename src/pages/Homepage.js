import React from 'react';
import Hero from '../assets/hero-elevator.webp';
import propertyImg from '../assets/property.webp';
import hospitalImg from '../assets/hospital.webp';
import industrialImg from '../assets/industrial-building.avif';
import Service from '../components/Service';
import useDynamicTitle from '../components/useDynamicTitle';
import { Link } from 'react-router';

const Homepage = () => {
  useDynamicTitle(
    'Neo Elevators | Premium Elevator Solutions',
    'Neo Elevators offers premium residential, hospital, and industrial lift installation and maintenance in Maharashtra. Get a free quote.'
  );
  return (
    <div className='mt-[4.5rem] md:mt-[4.5rem]'>
      {/* Hero Section */}
      <section className="hero-section">
        <img src={Hero} alt="Neo Elevators — Modern steel elevator lobby with luxury design in a business hotel" className="hero-bg" loading="eager" fetchPriority="high" />
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in-up">
          <h1>
            Elevating Your World with <span>Neo Elevators</span>
          </h1>
          <p>
            Pioneering modern elevator solutions with innovative and reliable vertical transportation systems for residential, commercial, and industrial spaces.
          </p>
          <Link to="/contactus" className="hero-cta">
            Get in Touch
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="section-heading">
          <span className="section-label">Our Expertise</span>
          <h2>Who We <span>Service</span></h2>
          <p>Tailored elevator solutions for every industry, built with precision and care.</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Service
            img={propertyImg}
            title="Residential Property Owners"
            subTitle="Tailored elevator solutions for homes — luxury apartments, multi-story houses, and villas. Our elevators seamlessly integrate into any home style with elegance and safety."
            isLeft={true}
          />
          <Service
            img={hospitalImg}
            title="Hospital Facilities"
            subTitle="Elevator solutions prioritizing safety, reliability, and efficiency. Designed to handle high traffic including patients, medical staff, and equipment for smooth hospital operations."
            isLeft={false}
          />
          <Service
            img={industrialImg}
            title="Industrial Buildings"
            subTitle="Robust and efficient elevator systems engineered for heavy loads, high traffic, and demanding environments of factories, warehouses, and distribution centers."
            isLeft={true}
          />
        </div>
      </section>
    </div>
  );
};

export default Homepage;