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
            <div className="project-body" key={index}>
                <h3>{header}</h3>
                <p>{paragraphs[index]}</p>
            </div>
        ))}
        {link && <a href={link.url} target="_blank" rel="noopener noreferrer">Checkout the project</a>}
        <div className="techstack">
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
                'Our young users are prompted to explore and interact with the app to find and snap pictures of each vocabulary in the selected set. This interaction fosters a real-world connection as they visually identify these words, reinforcing their vocabulary comprehension. As they successfully collect pictures of all the items in a word set, they unlock badges within the app, adding an element of excitement and motivation to their learning journey. They are then challenged to recall the vocabulary with quizzes, which reinforces their word retention and makes learning a dynamic and memorable process.',
                'In the development of our application, we have employed a suite of advanced technologies for both the front-end and back-end, primarily centered around UIKit and Swift. Swift is instrumental in creating a seamless and responsive user interface across all Apple platforms. For object detection and language processing, we integrate a YOLOv8 model, Google Cloud Vision, and OpenAI, with each playing a pivotal role in enhancing the app capabilities. The YOLOv8 model is essential for accurate real-time object detection, while Google Cloud Vision provides advanced image analysis. OpenAI adds a layer of sophisticated language interpretation and processing. Additionally, we incorporate Google Translate and Google Text-to-Speech to further enrich the user experience. Google Translate is crucial in providing accurate and instantaneous language translations, vital for the learning process in our app. Google Text-to-Speech enhances the interactive element of the app, enabling it to communicate with users in a more engaging and accessible way. Data management and user authentication are handled through Firebase Cloud Storage and Firebase Authentication, ensuring secure and efficient storage and user management.'
            ],
            technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
        },
        blog: {
            img: blogimage,
            title: "Blog",
            description: "Project description here.",
            headers: ['Inspiration/Problem', 'Solution', 'Technologies/Tools'],
            paragraphs: [
                'I wanted to create my blog UI myself, and I wanted to build something using Angular and to use Google API.',
                'This blog project was developed using the Angular framework, chosen for its ability to create dynamic and responsive applications.The blogs are fetched from Google Blogger using its API, allowing for seamless integration and automatic updates of blog content. The website is hosted on Vercel.',
            ],
            technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
            link: { url: "https://www.rawankitabat.com/" }
        },
        photo: {
            img: photoimage,
            title: "Capstone project",
            description: "Project description here.",
            headers: ['Inspiration/Problem', 'Solution', 'Technologies/Tools'],
            paragraphs: [
                'I like being able to blend my different interest, photography, animation, and  programing.  After graduating I wanted to take a break and create something simple for fun.',
                'The website is built using the React framework, chosen for its flexibility and efficiency in developing interactive user interfaces. The images are stored and fetched dynamically from Firebase, ensuring that the portfolio is always up-to-date with my latest work.',
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
                
                'Developed and designed a user-friendly website for Muslim student organization at Texas A&M University, to allow muslim student an easier access to resources. Using modern JavaScript frameworks, HTML, and CSS. Created a responsive UI to allow visitors across any device to have the same experience using Bootstrap and CSS.'
            ],
            technologies: ['html5', 'css3', 'javascript', 'bootstrap'],
            link: { url: "https://www.tamumsa.org/" }
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
