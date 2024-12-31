import React from 'react';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

const ImageGallery = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`number ${index + 1}`}
          style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
