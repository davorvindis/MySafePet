import React, { useState } from 'react';
import { Accordion, Card, Form, Button } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const ImagesCardEditor = ({ onImagesUpload, moveUp, moveDown, isFirst, isLast }) => {
  const [images, setImages] = useState([]);

  const handleImagesChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      id: Date.now() + Math.random(), // Unique identifier
      src: URL.createObjectURL(file),
    }));
    const updatedImages = [...images, ...newImages];
    setImages(updatedImages); // Update local state
    onImagesUpload(updatedImages); // Notify parent component
  };

  const handleRemoveImage = (id) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages); // Update local state
    onImagesUpload(updatedImages); // Notify parent component
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the list, do nothing

    const reorderedImages = Array.from(images);
    const [movedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, movedImage);

    setImages(reorderedImages); // Update local state
    onImagesUpload(reorderedImages); // Notify parent component
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

            <Card className="p-3 mb-3" style={{ borderRadius: '10px' }}>
              <Card.Title>Images</Card.Title>
              <Form.Group>
                <Form.Label>Choose Images</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  multiple // Allow multiple image uploads
                  onChange={handleImagesChange}
                />
              </Form.Group>

              {/* Drag-and-Drop Context */}
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="images">
                  {(provided) => (
                    <div
                      className="mt-3 d-flex flex-wrap"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {images.map((image, index) => (
                        <Draggable key={image.id} draggableId={image.id.toString()} index={index}>
                          {(provided) => (
                            <div
                              className="position-relative m-2"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <img
                                src={image.src}
                                alt="Uploaded"
                                style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
                              />
                              <Button
                                variant="danger"
                                size="sm"
                                className="position-absolute top-0 end-0 m-1"
                                onClick={() => handleRemoveImage(image.id)}
                              >
                                Remove
                              </Button>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ImagesCardEditor;
