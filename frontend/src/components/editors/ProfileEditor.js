import React from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProfileEditor = ({ profile, aboutMeData, iconsEnabled, onProfileChange, onAboutMeChange, onToggleIcon, setAboutMeTitle, onImageChange, moveUp, moveDown, isFirst, isLast }) => {

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result); // Pass the base64 URL to the parent component
      };
      reader.readAsDataURL(file); // Convert file to base64 URL
    }
  };

  return (
    <div className="edit-section p-3 border-end">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Edit Profile
            <div>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={moveUp}
                disabled={isFirst} // Disable button if it's the first item
                className="me-2"
              >
                Move Up
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={moveDown}
                disabled={isLast} // Disable button if it's the last item
              >
                Move Down
              </Button>
            </div>

          </Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload} // Trigger image upload
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={(e) => onProfileChange("name", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  type="text"
                  name="breed"
                  value={profile.breed}
                  onChange={(e) => onProfileChange("breed", e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Sub Breed</Form.Label>
                <Form.Control
                  type="text"
                  name="subBreed"
                  value={profile.subBreed}
                  onChange={(e) => onProfileChange("subBreed", e.target.value)}
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
