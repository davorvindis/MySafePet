import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function OwnerInfoCard({ title, phone, email, address, icon, extraInfo }) {
  return (
    <Card className="p-3" style={{ borderRadius: '10px' }}>
      <Card.Title>
        <IconTextWrapper>
          {icon && <FontAwesomeIcon icon={icon} style={{ fontSize: '40px', color: '#A0522D' }} />}
          <SectionTitle>{title}</SectionTitle>
        </IconTextWrapper>
      </Card.Title>

      <Card.Body>
        <SectionTitle>Phone</SectionTitle>
        <InfoText>{phone}</InfoText>

        <SectionTitle>Email</SectionTitle>
        <InfoText>{email}</InfoText>

        <SectionTitle>Address</SectionTitle>
        <InfoText>{address}</InfoText>

        {extraInfo && extraInfo.length > 0 && (
          <>
            
            {extraInfo.map((info, index) => (
              <div key={index}>
                <SectionTitle>{info.label}</SectionTitle>
                <InfoText>{info.value}</InfoText>
              </div>
            ))}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default OwnerInfoCard;
