import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactIcons = ({ profile, iconsEnabled }) => (
  <div className="edit-section p-3 border-end">
    <ButtonGroup aria-label="Contact Icons">
      {iconsEnabled.email && (
        <Button
          variant="outline-primary"
          className="d-flex align-items-center justify-content-center"
          onClick={() => (window.location.href = `mailto:${profile.ownerEmail}`)}
          title="Send Email"
        >
          <FaEnvelope className="me-1" />
          Email
        </Button>
      )}
      {iconsEnabled.phone && (
        <Button
          variant="outline-success"
          className="d-flex align-items-center justify-content-center"
          onClick={() => (window.location.href = `tel:${profile.ownerPhone}`)}
          title="Call"
        >
          <FaPhone className="me-1" />
          Call
        </Button>
      )}
      {iconsEnabled.address && (
        <Button
          variant="outline-danger"
          className="d-flex align-items-center justify-content-center"
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                profile.ownerAddress
              )}`,
              '_blank'
            )
          }
          title="View Address"
        >
          <FaMapMarkerAlt className="me-1" />
          Address
        </Button>
      )}
    </ButtonGroup>
  </div>
);

export default ContactIcons;
