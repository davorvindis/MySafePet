import React, { useState } from 'react';
import { Form, Button, Accordion } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const IconsEditor = ({ profile, setProfile, iconsEnabled, setIconsEnabled }) => {
  const handleInputChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleToggleIcon = (icon) => {
    setIconsEnabled((prevIconsEnabled) => ({
      ...prevIconsEnabled,
      [icon]: !prevIconsEnabled[icon],
    }));
  };

  return (
    <Accordion className="mb-3">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Edit Contact Icons</Accordion.Header>
        <Accordion.Body>
          <Form>
            {/* Email Input */}
            <Form.Group className="mb-3">
              <Form.Label>
                <FaEnvelope className="me-1" /> Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={profile.ownerEmail}
                onChange={(e) => handleInputChange('ownerEmail', e.target.value)}
              />
              <Form.Check
                type="switch"
                label="Enable Email Icon"
                checked={iconsEnabled.email}
                onChange={() => handleToggleIcon('email')}
                className="mt-2"
              />
            </Form.Group>

            {/* Phone Input */}
            <Form.Group className="mb-3">
              <Form.Label>
                <FaPhone className="me-1" /> Phone
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                value={profile.ownerPhone}
                onChange={(e) => handleInputChange('ownerPhone', e.target.value)}
              />
              <Form.Check
                type="switch"
                label="Enable Phone Icon"
                checked={iconsEnabled.phone}
                onChange={() => handleToggleIcon('phone')}
                className="mt-2"
              />
            </Form.Group>

            {/* Address Input */}
            <Form.Group className="mb-3">
              <Form.Label>
                <FaMapMarkerAlt className="me-1" /> Address
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={profile.ownerAddress}
                onChange={(e) => handleInputChange('ownerAddress', e.target.value)}
              />
              <Form.Check
                type="switch"
                label="Enable Address Icon"
                checked={iconsEnabled.address}
                onChange={() => handleToggleIcon('address')}
                className="mt-2"
              />
            </Form.Group>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default IconsEditor;
