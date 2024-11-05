import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProfileEditor = ({ profile, aboutMeData, iconsEnabled, onProfileChange, onAboutMeChange, onToggleIcon, setAboutMeTitle, onImageChange }) => {
  
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
          <Accordion.Header>Edit Profile</Accordion.Header>
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

        <Accordion.Item eventKey="1">
          <Accordion.Header>About Me Section</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={aboutMeData.title}
                  onChange={(e) => setAboutMeTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <ReactQuill
                  theme="snow"
                  value={aboutMeData.subtitle}
                  onChange={onAboutMeChange}
                  modules={{
                    toolbar: [
                      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                      [{ 'align': [] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                      ['blockquote', 'code-block'],
                      ['link'],
                      [{ 'color': [] }, { 'background': [] }],
                    ],
                  }}
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
