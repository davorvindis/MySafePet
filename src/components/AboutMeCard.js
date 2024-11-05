import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

// Define styled components
const Title = styled(Card.Title)`
  color: orange;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-align: center;
`;

function AboutMeCard({ title, subtitle }) {
  return (
    <Card className="p-0">
      <Card.Body>
        <Title>{title}</Title>
        {/* Render subtitle with inline styles directly */}
        <div dangerouslySetInnerHTML={{ __html: subtitle }} style={{ width: '100%' }} />
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;
