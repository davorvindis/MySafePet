import React, { useState } from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';

const ProfileEditor = ({ profile, onProfileChange, onImageChange, moveUp, moveDown, isFirst, isLast }) => {
  const [imagePreview, setImagePreview] = useState(profile.profilePic || null); // For preview

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl); // Update preview
      onImageChange(previewUrl, file); // Pass preview URL and file object
    }
  };
  
  return (
    <div className="edit-section p-3 border-end">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Edit Profile
            <div>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={moveUp}
                disabled={isFirst}
                className="me-2"
              >
                Move Up
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={moveDown}
                disabled={isLast}
              >
                Move Down
              </Button>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              {/* Profile Image Upload */}
              <Form.Group className="mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload} // Trigger file selection
                />
                {imagePreview && (
                  <div className="mt-3">
                    <img
                      src={imagePreview}
                      alt="Profile Preview"
                      style={{
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                )}
              </Form.Group>

              {/* Name */}
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={(e) => onProfileChange('name', e.target.value)}
                />
              </Form.Group>

              {/* Breed */}
              <Form.Group className="mb-3">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  type="text"
                  name="breed"
                  value={profile.breed}
                  onChange={(e) => onProfileChange('breed', e.target.value)}
                />
              </Form.Group>

              {/* Sub Breed */}
              <Form.Group className="mb-3">
                <Form.Label>Sub Breed</Form.Label>
                <Form.Control
                  type="text"
                  name="subBreed"
                  value={profile.subBreed}
                  onChange={(e) => onProfileChange('subBreed', e.target.value)}
                />
              </Form.Group>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ProfileEditor;
