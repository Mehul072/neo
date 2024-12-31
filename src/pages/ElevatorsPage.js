import React, { useState } from 'react';
import useDynamicTitle from '../components/useDynamicTitle';

const importAll = (r) => r.keys().map(r);
const allImages = importAll(require.context('../assets/images/cabinpics', false, /\.(png|jpe?g|svg)$/));
const ceilingImages = importAll(require.context('../assets/images/cabinpics/ceiling', false, /\.(png|jpe?g|svg)$/));
const buttonImages = importAll(require.context('../assets/images/cabinpics/buttons', false, /\.(png|jpe?g|svg)$/));
const chairLiftImages = importAll(require.context('../assets/images/cabinpics/chairLift', false, /\.(png|jpe?g|svg)$/));


const allCategories = [...allImages, ...ceilingImages, ...buttonImages, ...chairLiftImages];

const ElevatorsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  useDynamicTitle("Elevator components | Neo elevators");

  const getFilteredImages = () => {
    switch (selectedCategory) {
      case 'ceiling':
        return ceilingImages;
      case 'button':
        return buttonImages;
      case 'Chair-lift':
        return chairLiftImages;
      default:
        return allCategories;
    }
  };

  return (
    <div className="ElevatorsPage mb-10 mt-[8rem]">
      <h1 className="text-center text-2xl font-bold mb-5">Available Designs</h1>
      <button
          type="button"
          onClick={() => setSelectedCategory('all')}
          className={`${
            selectedCategory === 'all' ? 'bg-primary text-black' : 'bg-white text-primary-700'
          } border border-primary hover:bg-gray-200 hover:text-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3`}
        >
          All Categories
        </button>
      <div className=" items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          onClick={() => setSelectedCategory('button')}
          className={`${
            selectedCategory === 'button' ? 'bg-primary text-black' : 'bg-white text-primary-700'
          } border border-primary hover:bg-gray-200 hover:text-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
        >
          Button Panel
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('ceiling')}
          className={`${
            selectedCategory === 'ceiling' ? 'bg-primary text-black' : 'bg-white text-primary-700'
          } border border-primary hover:bg-gray-200 hover:text-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
        >
          Ceiling
        </button>
        <button
          type="button"
          onClick={() => setSelectedCategory('Chair-lift')}
          className={`${
            selectedCategory === 'Chair-lift' ? 'bg-primary text-black' : 'bg-white text-primary-700'
          } border border-primary hover:bg-gray-200 hover:text-black rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3`}
        >
          Chair Lifts
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {getFilteredImages().map((image, index) => {
          const globalIndex = allCategories.indexOf(image) + 1; // Find global index in allCategories
          return (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={image}
                alt={`Design ${globalIndex}`}
              />
              <p className="text-center mt-2 font-medium">Design {globalIndex}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ElevatorsPage;
