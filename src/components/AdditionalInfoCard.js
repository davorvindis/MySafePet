import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const SectionTitle = styled.h5`
  color: #A0522D;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

function AdditionalInfoCard({ title, additionalInfo }) {
  return (
    <Card className="p-3" style={{ borderRadius: '10px' }}>
      <Card.Title>
        <SectionTitle>{title}</SectionTitle>
      </Card.Title>

      <Card.Body>
        {additionalInfo && additionalInfo.length > 0 ? (
          additionalInfo.map((info, index) => (
            <div key={index}>
              <SectionTitle>{info.label}</SectionTitle>
              <InfoText>{info.value}</InfoText>
            </div>
          ))
        ) : (
          <InfoText>No additional information available.</InfoText>
        )}
      </Card.Body>
    </Card>
  );
}

export default AdditionalInfoCard;
