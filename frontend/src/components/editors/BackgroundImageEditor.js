import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const BackgroundImageEditor = ({ onBackgroundChange }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
      onBackgroundChange(imageUrl); // Notify the parent component about the change
    }
  };

  const handleRemoveBackground = () => {
    setBackgroundImage(null);
    onBackgroundChange(null); // Reset background in the parent component
  };

  return (
    <Card className="p-3 mb-3">
      <Card.Title>Background Image</Card.Title>
      <Form.Group>
        <Form.Label>Upload Background Image</Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleBackgroundUpload}
        />
      </Form.Group>

      {backgroundImage && (
        <div className="mt-3">
          <Card.Img
            src={backgroundImage}
            alt="Background Preview"
            style={{
              height: '150px',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <Button
            variant="danger"
            className="mt-2"
            onClick={handleRemoveBackground}
          >
            Remove Background
          </Button>
        </div>
      )}
    </Card>
  );
};

export default BackgroundImageEditor;
