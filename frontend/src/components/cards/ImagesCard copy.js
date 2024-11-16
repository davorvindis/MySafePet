import React from 'react';
import Card from 'react-bootstrap/Card';

const ImagesCard = ({ photos, viewType, showTitleDesc }) => {
  return (
    <Card className="p-3 mt-3" style={{ borderRadius: '10px' }}>
      <Card.Title>Fotos de Mascota</Card.Title>
      <div
        className={`photo-gallery ${
          viewType === 'list' ? 'd-flex flex-column' : 'd-flex flex-wrap'
        }`}
      >
        {photos.map((photo, index) => (
          <div key={index} style={{ margin: '5px', textAlign: 'center' }}>
            <img
              src={photo.src}
              alt={`Pet photo ${index + 1}`}
              style={{
                width: viewType === 'list' ? '100%' : '100px',
                height: '100px',
                borderRadius: '8px',
              }}
            />
            {showTitleDesc && <p>Photo {index + 1}</p>}
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ImagesCard;
