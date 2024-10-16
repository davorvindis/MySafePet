import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// Define styled components
const Title = styled.h4`
  color: #A0522D;               /* Set text color to brownish */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;            /* Make the text bold */
  text-align: left;             /* Align to left */
`;

const Subtitle = styled.p`
  color: grey;                  /* Subtitle in grey */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  text-align: left;             /* Align to left */
`;

const SectionTitle = styled.h5`
  color: #A0522D;               /* Brown color for section titles */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;        /* Space below the section title */
`;

const InfoText = styled.p`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0.5rem;
  font-size: 1rem;              /* Slightly larger text */
`;

const IconWrapper = styled.div`
  text-align: left;
  margin-bottom: 1rem;          /* Space below the icon */
`;

const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

function OwnerInfo({ title, phone, email, address }) {
  return (
    <Card className="p-3" style={{ borderRadius: '10px' }}> {/* Added padding and border-radius */}
      <Card.Title>
        <IconTextWrapper>
          <FontAwesomeIcon icon={faPhone} style={{ fontSize: '40px', color: '#A0522D' }} />
          <SectionTitle>Owner info</SectionTitle>
        </IconTextWrapper>
      </Card.Title>

      <Card.Body>
        <InfoText>{phone}</InfoText>

        <SectionTitle>Email</SectionTitle>
        <InfoText>{email}</InfoText>

        <SectionTitle>Address</SectionTitle>
        <InfoText>{address}</InfoText>

        <Button variant="brown" style={{ backgroundColor: '#A0522D', borderRadius: '20px' }}>
          <i className="bi bi-geo-alt-fill"></i> Direction
        </Button>
      </Card.Body>
    </Card>
  );
}

export default OwnerInfo;
