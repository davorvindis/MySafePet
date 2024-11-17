import React from 'react';
import { Card } from 'react-bootstrap';

const AboutMeCard = ({ title, subtitle, styleConfig }) => {
  return (
    <Card
      className="p-3 mb-3"
      style={{
        backgroundColor: styleConfig.backgroundColor || '#fff',
        color: styleConfig.textColor || '#000',
        fontSize: styleConfig.fontSize || '16px',
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Card.Title>{title}</Card.Title>
      <Card.Text>{subtitle}</Card.Text>
    </Card>
  );
};

export default AboutMeCard;
