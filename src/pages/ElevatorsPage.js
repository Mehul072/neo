import React, { useState } from 'react';
import useDynamicTitle from '../components/useDynamicTitle';

const importAll = (r) => r.keys().map(r);
const allImages = importAll(require.context('../assets/images/cabinpics', false, /\.(png|jpe?g|svg)$/));
const ceilingImages = importAll(require.context('../assets/images/cabinpics/ceiling', false, /\.(png|jpe?g|svg)$/));
const buttonImages = importAll(require.context('../assets/images/cabinpics/buttons', false, /\.(png|jpe?g|svg)$/));
const chairLiftImages = importAll(require.context('../assets/images/cabinpics/chairLift', false, /\.(png|jpe?g|svg)$/));

const allCategories = [...allImages, ...ceilingImages, ...buttonImages, ...chairLiftImages];

const categories = [
  { key: 'all', label: 'All Designs' },
  { key: 'button', label: 'Button Panels' },
  { key: 'ceiling', label: 'Ceilings' },
  { key: 'Chair-lift', label: 'Chair Lifts' },
];

const ElevatorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  useDynamicTitle(
    'Available Elevator Designs | Neo Elevators',
    'Explore our collection of premium elevator cabin designs, ceiling panels, button panels, and chair lifts from Neo Elevators.'
  );

  const getFilteredImages = () => {
    switch (selectedCategory) {
      case 'ceiling': return ceilingImages;
      case 'button': return buttonImages;
      case 'Chair-lift': return chairLiftImages;
      default: return allCategories;
    }
  };

  return (
    <div className="mt-[4.5rem]">
      {/* Header */}
      <div className="gallery-header">
        <h1>Available <span>Designs</span></h1>
        <p>Explore our premium collection of elevator components and interiors</p>
      </div>

      {/* Filter Pills */}
      <div className="filter-pills">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`filter-pill ${selectedCategory === cat.key ? 'active' : ''}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {getFilteredImages().map((image, index) => {
          const globalIndex = allCategories.indexOf(image) + 1;
          return (
            <div key={`${selectedCategory}-${index}`} className="gallery-item animate-fade-in">
              <img src={image} alt={`Design ${globalIndex}`} loading="lazy" />
              <div className="gallery-label">Design {globalIndex}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElevatorsPage;
