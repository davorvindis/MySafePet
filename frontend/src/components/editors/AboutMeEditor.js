import React from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import ReactQuill CSS

const AboutMeEditor = ({ aboutMeData, setAboutMeTitle, onAboutMeChange, moveUp, moveDown, isFirst, isLast }) => {
    return (
        <div className="edit-section p-3 border-end">

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        About Me Section
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
                                    value={aboutMeData.title}
                                    onChange={(e) => setAboutMeTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <ReactQuill
                                    theme="snow"
                                    value={aboutMeData.subtitle}
                                    onChange={onAboutMeChange}
                                    modules={{
                                        toolbar: [
                                            [{ header: '1' }, { header: '2' }, { font: [] }],
                                            [{ align: [] }],
                                            ['bold', 'italic', 'underline', 'strike'],
                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                            ['blockquote', 'code-block'],
                                            ['link'],
                                            [{ color: [] }, { background: [] }],
                                        ],
                                    }}
                                />
                            </Form.Group>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AboutMeEditor;
