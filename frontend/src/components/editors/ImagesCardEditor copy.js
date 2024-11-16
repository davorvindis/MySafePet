import React from 'react';
import { Button, Form, Card, ToggleButton, ToggleButtonGroup, Accordion } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const ImagesCardEditor = ({
  photos,
  onAddPhoto,
  onDeletePhoto,
  viewType,
  setViewType,
  showTitleDesc,
  setShowTitleDesc,
  moveUp, moveDown, isFirst, isLast 
}) => {
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhoto = {
        id: photos.length + 1,
        src: URL.createObjectURL(file),
      };
      onAddPhoto(newPhoto);
    }
  };

  return (
    <div className="edit-section p-3 border-end">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Images

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
            <Card className="p-3">
              <h5>Images</h5>

              {/* Toggle for title and description */}
              <Form.Check
                type="switch"
                label="Title, Description"
                checked={showTitleDesc}
                onChange={() => setShowTitleDesc(!showTitleDesc)}
              />

              {/* View Type Toggle */}
              <div className="my-3">
                <Form.Label>View Type</Form.Label>
                <ToggleButtonGroup
                  type="radio"
                  name="viewType"
                  value={viewType}
                  onChange={(value) => setViewType(value)}
                >
                  <ToggleButton id="list" value="list">List</ToggleButton>
                  <ToggleButton id="grid1" value="grid1">Grid 1</ToggleButton>
                  <ToggleButton id="grid2" value="grid2">Grid 2</ToggleButton>
                </ToggleButtonGroup>
              </div>

              {/* Display Photos */}
              <div className="d-flex flex-wrap">
                {photos.map((photo) => (
                  <div key={photo.id} className="position-relative m-2">
                    <img src={photo.src} alt="pet" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
                    <Button
                      variant="danger"
                      size="sm"
                      className="position-absolute top-0 end-0 m-1"
                      onClick={() => onDeletePhoto(photo.id)}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Upload New Photo */}
              <div className="mt-3">
                <Form.Label>Photos (600x600px, 1:1 or 4:5 Ratio)</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handlePhotoUpload} />
              </div>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ImagesCardEditor;
