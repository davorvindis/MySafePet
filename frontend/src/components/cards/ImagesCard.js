// src/components/ImagesCard.js
import React from 'react';
import Card from 'react-bootstrap/Card';

const ImagesCard = ({ photos }) => {
  return (
    <Card className="p-3 mt-3" style={{ borderRadius: '10px' }}>
      <Card.Title>Fotos de Mascota</Card.Title>
      <div className="photo-gallery d-flex flex-wrap">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={`Pet photo ${index + 1}`}
            style={{ width: '100px', height: '100px', margin: '5px', borderRadius: '8px' }}
          />
        ))}
      </div>
    </Card>
  );
};

export default ImagesCard;
