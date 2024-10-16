import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

// Define styled components
const Title = styled(Card.Title)`
  color: orange;                /* Set text color to orange */
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;            /* Make the text bold */
  text-align: center;           /* Center the title */
`;

const Subtitle = styled(Card.Text)`   /* Styled Subtitle */
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;           /* Center the subtitle */
`;

function AboutMeCard({ title, subtitle }) {
  return (
    <Card className ="p-0">
      <Card.Body>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>  {/* Using Subtitle styled component */}
      </Card.Body>
    </Card>
  );
}

export default AboutMeCard;
