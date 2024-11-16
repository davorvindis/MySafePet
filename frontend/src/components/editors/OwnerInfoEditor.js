import React from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const icons = {
  phone: faPhone,
  envelope: faEnvelope,
  home: faHome,
  user: faUser,
};

const OwnerInfoEditor = ({ ownerInfo, onOwnerInfoChange,moveUp, moveDown, isFirst, isLast }) => { 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onOwnerInfoChange(name, value);
  };

  const handleExtraInfoChange = (index, field, value) => {
    const updatedExtras = ownerInfo.extraInfo.map((info, i) =>
      i === index ? { ...info, [field]: value } : info
    );
    onOwnerInfoChange("extraInfo", updatedExtras);
  };

  const addExtraInfoField = () => {
    const updatedExtras = [...ownerInfo.extraInfo, { label: '', value: '' }];
    onOwnerInfoChange("extraInfo", updatedExtras);
  };

  const removeExtraInfoField = (index) => {
    const updatedExtras = ownerInfo.extraInfo.filter((_, i) => i !== index);
    onOwnerInfoChange("extraInfo", updatedExtras);
  };

  return (
    <div className="edit-section p-3 border-end">

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Edit Owner Info
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
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={ownerInfo.title}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Select Icon</Form.Label>
                <Button variant="secondary" onClick={() => handleInputChange('icon', icons.phone)}>
                  <FontAwesomeIcon icon={ownerInfo.icon || faUser} /> Choose Icon
                </Button>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={ownerInfo.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={ownerInfo.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={ownerInfo.address}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Extra Info Section */}
              <h6>Extra Information</h6>
              {ownerInfo.extraInfo.map((info, index) => (
                <div key={index} className="d-flex mb-2">
                  <Form.Control
                    type="text"
                    placeholder="Label"
                    value={info.label}
                    onChange={(e) => handleExtraInfoChange(index, 'label', e.target.value)}
                    className="me-2"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Value"
                    value={info.value}
                    onChange={(e) => handleExtraInfoChange(index, 'value', e.target.value)}
                    className="me-2"
                  />
                  <Button variant="danger" onClick={() => removeExtraInfoField(index)}>
                    &times;
                  </Button>
                </div>
              ))}
              <Button variant="primary" onClick={addExtraInfoField}>
                + Add
              </Button>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default OwnerInfoEditor;
