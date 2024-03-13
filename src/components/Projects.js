import React, { useState } from 'react';
import { Container, Row, Col, Modal } from "react-bootstrap";
import tamumsa from "../assets/img/TamuMSA.png";
import csce315 from "../assets/img/cscs315.png";
import howdyHack from "../assets/img/HowdyHack.png";
import blogimage from "../assets/img/blogkitabat.png";
import photoimage from "../assets/img/photo.png";
import lingoimage from "../assets/img/lingoleap.png";

// ProjectDescription component 
const ProjectDescription = ({ title, description, link, technologies, headers, paragraphs }) => (
    <>
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        {headers.map((header, index) => (
            <div key={index}>
                <h3>{header}</h3>
                <p>{paragraphs[index]}</p>
            </div>
        ))}
        {link && <a href={link.url} target="_blank" rel="noopener noreferrer">Checkout the project</a>}
        <div>
            {technologies.map(tech => (
                <i key={tech} className={`devicon-${tech}-plain`}></i>
            ))}
        </div>
    </>
);

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const projects = {
        lingoleap: {
            img: lingoimage,
            title: "Capstone project",
            description: "Project description here.",
            headers: ['Inspiration/Problem', 'Solution', 'Technologies/Tools'],
            paragraphs: [
                'Paragraph for Inspiration/Problem. This is an example text.',
                'Paragraph for Solution. This is another example text.',
                'Paragraph for Technologies/Tools. Yet another example text.'
            ],
            technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
            link: { url: "https://example.com" }
        },
        blog: {
            img: blogimage,
            title: "Capstone project",
            description: "Project description here.",
            headers: ['Inspiration/Problem', 'Solution', 'Technologies/Tools'],
            paragraphs: [
                'Paragraph for Inspiration/Problem. This is an example text.',
                'Paragraph for Solution. This is another example text.',
                'Paragraph for Technologies/Tools. Yet another example text.'
            ],
            technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
            link: { url: "https://example.com" }
        },
        photo: {
            img: photoimage,
            title: "Capstone project",
            description: "Project description here.",
            headers: ['Inspiration/Problem', 'Solution', 'Technologies/Tools'],
            paragraphs: [
                'Paragraph for Inspiration/Problem. This is an example text.',
                'Paragraph for Solution. This is another example text.',
                'Paragraph for Technologies/Tools. Yet another example text.'
            ],
            technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
            link: { url: "https://example.com" }
        },
        msa: {
            img: tamumsa,
            title: "Capstone project",
            description: "Project description here.",
            headers: ['Inspiration/Problem', 'Solution', 'Technologies/Tools'],
            paragraphs: [
                'Paragraph for Inspiration/Problem. This is an example text.',
                'Paragraph for Solution. This is another example text.',
                'Paragraph for Technologies/Tools. Yet another example text.'
            ],
            technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
            link: { url: "https://example.com" }
        },
    };

    const openModal = (projectKey) => {
        setSelectedProject(projects[projectKey]);
        setShowModal(true);
    };

    return (
        <section className="Project-section" id="Project-section">
            <h1>My Recent Projects</h1>
            <Container className='projects'>
                <Row>
                    {Object.keys(projects).map((projectKey) => (
                        <Col xs={12} sm={6} lg={4} key={projectKey} className="mb-4">
                            <img 
                                src={projects[projectKey].img} 
                                alt={projectKey} 
                                className="project-image"
                                style={{ cursor: 'pointer', width: '100%' }} 
                                onClick={() => openModal(projectKey)} 
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
            {selectedProject && (
                <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProject.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ProjectDescription {...selectedProject} />
                    </Modal.Body>
                </Modal>
            )}
        </section>
    );
};
