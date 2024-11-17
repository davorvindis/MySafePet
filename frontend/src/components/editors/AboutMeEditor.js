import React, { useState } from 'react';
import { Form, Button, Accordion } from 'react-bootstrap';

const AboutMeEditor = ({ aboutMeData, setAboutMeData, styleConfig, setStyleConfig }) => {
    const handleStyleChange = (field, value) => {
        setStyleConfig((prevConfig) => ({
            ...prevConfig,
            [field]: value,
        }));
    };

    return (
        <div className="edit-section p-3 border-end">
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About Me Section</Accordion.Header>
                    <Accordion.Body>
                        {/* Content Configuration */}
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={aboutMeData.title}
                                    onChange={(e) => setAboutMeData({ ...aboutMeData, title: e.target.value })}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={aboutMeData.subtitle}
                                    onChange={(e) => setAboutMeData({ ...aboutMeData, subtitle: e.target.value })}
                                />
                            </Form.Group>
                        </Form>

                        {/* Style Configuration */}
                        <h5>Customize Style</h5>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Background Color</Form.Label>
                                <Form.Control
                                    type="color"
                                    value={styleConfig.backgroundColor}
                                    onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Text Color</Form.Label>
                                <Form.Control
                                    type="color"
                                    value={styleConfig.textColor}
                                    onChange={(e) => handleStyleChange('textColor', e.target.value)}
                                />
                            </Form.Group>
                            {/* <Form.Group className="mb-3">
                                <Form.Label>Font Size</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="12"
                                    max="36"
                                    value={styleConfig.fontSize}
                                    onChange={(e) => handleStyleChange('fontSize', `${e.target.value}px`)}
                                />
                            </Form.Group> */}
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default AboutMeEditor;
