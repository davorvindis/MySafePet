import React from 'react';
import { Card } from 'react-bootstrap';

const ProfilePetInfoCard = ({ name, breed, subBreed, profilePic }) => (
  <Card className="text-center" style={{ width: '18rem', margin: '0 auto' }}>
    <Card.Img
      variant="top"
      src={profilePic}
      alt={name}
      className="rounded-circle"
      style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '1rem auto' }}
    />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {breed} <strong>{subBreed}</strong>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default ProfilePetInfoCard;
