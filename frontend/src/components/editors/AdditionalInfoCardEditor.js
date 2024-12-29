import React, {useState} from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';

const AdditionalInfoCardEditor = ({ additionalInfo, onAdditionalInfoChange, moveUp, moveDown, isFirst, isLast}) => {

  const [showAdditionalInfoCard, setShowAdditionalInfoCard] = useState(true);

  const handleInfoChange = (index, field, value) => {
    const updatedInfo = additionalInfo.map((info, i) =>
      i === index ? { ...info, [field]: value } : info
    );
    onAdditionalInfoChange(updatedInfo, showAdditionalInfoCard);
  };

  const handleToggleVisibility = () => {
    const newVisibility = !showAdditionalInfoCard;
    setShowAdditionalInfoCard(newVisibility);
    onAdditionalInfoChange(additionalInfo, newVisibility); // Pass updated visibility state
  };

  const addInfoField = () => {
    const updatedInfo = [...additionalInfo, { label: '', value: '' }];
    onAdditionalInfoChange(updatedInfo, showAdditionalInfoCard);
  };

  const removeInfoField = (index) => {
    const updatedInfo = additionalInfo.filter((_, i) => i !== index);
    onAdditionalInfoChange(updatedInfo, showAdditionalInfoCard);
  };

  return (
    <div className="edit-section p-3 border-end">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Edit Additional Info
            <div>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={moveUp}
                disabled={isFirst} // Disable button if it's the first item
                className="me-2"
              >
                Move Up
              </Button>
              <Button
                variant="outline-primary"
                size="sm"
                onClick={moveDown}
                disabled={isLast} // Disable button if it's the last item
              >
                Move Down
              </Button>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            {/* Toggle Switch to Show/Hide AdditionalInfoCard */}
            <Form.Group className="mb-3">
              <Form.Check
                type="switch"
                id="show-additional-info-switch"
                label="Show Additional Info Card"
                checked={showAdditionalInfoCard}
                onChange={handleToggleVisibility} // Call the toggle handler
              />
            </Form.Group>
            <Form>
              {additionalInfo.map((info, index) => (
                <div key={index} className="d-flex mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Label"
                    value={info.label}
                    onChange={(e) => handleInfoChange(index, 'label', e.target.value)}
                    className="me-2"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Value"
                    value={info.value}
                    onChange={(e) => handleInfoChange(index, 'value', e.target.value)}
                    className="me-2"
                  />
                  <Button variant="danger" onClick={() => removeInfoField(index)}>
                    &times;
                  </Button>
                </div>
              ))}
              <Button variant="primary" onClick={addInfoField} className="mb-3">
                + Add
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AdditionalInfoCardEditor;
