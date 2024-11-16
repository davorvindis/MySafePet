import React from 'react';
import { Card } from 'react-bootstrap';

const ImagesCard = ({ images = [], viewType }) => {
  const getContainerStyle = () => {
    switch (viewType) {
      case 'list':
        return { display: 'flex', flexDirection: 'column' };
      case 'grid1':
        return { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' };
      case 'grid2':
        return { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' };
      default:
        return {};
    }
  };

  return (
    <Card className="p-3 mt-3" style={{ borderRadius: '10px' }}>
      <Card.Title>Image Gallery</Card.Title>
      <div style={getContainerStyle()}>
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} style={{ margin: '5px', textAlign: 'center' }}>
              <img
                src={image.src}
                alt="Uploaded"
                style={{
                  width: viewType === 'list' ? '100%' : '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          ))
        ) : (
          <p>No images uploaded yet.</p>
        )}
      </div>
    </Card>
  );
};

export default ImagesCard;
