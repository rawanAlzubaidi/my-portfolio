import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  return (
    <section>
        <Container>
            <div className="Skills">
                <h1></h1>
                <h1> Tools and Technologies I use to bring projects to life:</h1>
                <Row xs={3} md={4} lg={5}>
                    <Col> 
                        <a href="https://www.w3schools.com/cpp/" target="_blank">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus"/>
                        </a>
                        <p>C++</p>
                    </Col>
                    <Col>
                        <a href="https://www.w3schools.com/cpp/" target="_blank">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-plain.svg" alt="HTML"/>
                        </a>
                        <p>HTML</p>

                    </Col>
                    <Col>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" />
                        </a> 
                        <p>JavaScript</p>
                    </Col>
                    <Col>
                        <a href="https://www.w3schools.com/cpp/" target="_blank">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-plain.svg" alt="cplusplus"/>
                        </a>
                        <p>CSS</p>

                    </Col>
                    <Col> 
                        <a href="https://www.python.org" target="_blank"> 
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python"/>
                        </a>
                        <p>Python</p>
                    </Col>
                </Row>

                <Row xs={3} md={4} lg={5}>
                    <Col> 
                        <a href="https://www.python.org" target="_blank"> 
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="python"/>
                        </a>
                        <p>React</p>
                    </Col>
                    <Col>
                        <a href="https://www.java.com" target="_blank"> 
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="java" />
                        </a> 
                        <p>Github</p>
                    </Col>
                    <Col>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg" alt="javascript" />
                        </a> 
                        <p>Google cloud</p>
                    </Col>
                    <Col>
                        <a href="https://www.w3schools.com/cpp/" target="_blank">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg" alt="cplusplus"/>
                        </a>
                        <p>Azure</p>
                    </Col>

                    <Col>
                        <a href="https://www.w3schools.com/cpp/" target="_blank">
                            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons//jquery/jquery-original.svg" alt="cplusplus"/>
                        </a>
                        <p>Jquery</p>
                    </Col>
                </Row>

            </div>
        </Container>


    
    </section>
  )
}