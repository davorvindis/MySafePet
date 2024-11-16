import React, { useState } from 'react';
import { Button, Form, Card, ToggleButton, ToggleButtonGroup, Accordion } from 'react-bootstrap';
import { FaTrash, FaUpload } from 'react-icons/fa';
import { postImage, getImages } from '../../services/imagesApi';


const ImagesCardEditor = ({ moveUp, moveDown, isFirst, isLast }) => {

  const [photos, setPhotos] = useState([
    { id: 1, src: 'https://via.placeholder.com/150' },
    { id: 2, src: 'https://via.placeholder.com/150' },
    { id: 3, src: 'https://via.placeholder.com/150' },
  ]);
  const [viewType, setViewType] = useState('grid1');
  const [showTitleDesc, setShowTitleDesc] = useState(false);


  // Ejemplo de cómo llamar a postImage
  const handleImageUpload = async (file) => {
    try {
      const response = await postImage(file);
      console.log('Image uploaded:', response.file_path);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  // Ejemplo de cómo llamar a getImages
  const fetchImages = async () => {
    try {
      const images = await getImages();
      console.log('Images:', images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPhoto = {
        id: photos.length + 1,
        src: URL.createObjectURL(file),
      };
      setPhotos([...photos, newPhoto]);
    }
  };

  const handleDeletePhoto = (id) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  const handleViewTypeChange = (value) => {
    setViewType(value);
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

              {/* Toggle para mostrar título y descripción */}
              <Form.Check
                type="switch"
                label="Title, Description"
                checked={showTitleDesc}
                onChange={() => setShowTitleDesc(!showTitleDesc)}
              />

              {/* Tipo de Vista */}
              <div className="my-3">
                <Form.Label>View Type</Form.Label>
                <ToggleButtonGroup type="radio" name="viewType" value={viewType} onChange={handleViewTypeChange}>
                  <ToggleButton id="list" value="list">List</ToggleButton>
                  <ToggleButton id="grid1" value="grid1">Grid 1</ToggleButton>
                  <ToggleButton id="grid2" value="grid2">Grid 2</ToggleButton>
                </ToggleButtonGroup>
              </div>

              {/* Fotos */}
              <div className="d-flex flex-wrap">
                {photos.map((photo) => (
                  <div key={photo.id} className="position-relative m-2">
                    <img src={photo.src} alt="pet" style={{ width: '100px', height: '100px', borderRadius: '8px' }} />
                    <Button
                      variant="danger"
                      size="sm"
                      className="position-absolute top-0 end-0 m-1"
                      onClick={() => handleDeletePhoto(photo.id)}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                ))}
              </div>

              {/* Subir Nueva Foto */}
              <div className="mt-3">
                <Form.Label>Photos (600x600px, 1:1 or 4:5 Ratio)</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleImageUpload} />
              </div>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default ImagesCardEditor;
