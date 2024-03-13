import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import divider from "../assets/img/divider.png";
import divider2 from "../assets/img/divider2.png";
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  return (
    <section className="Skill-section" id="Skills">
         {/* <div className="divider">   <img src={divider} alt="Header Img"/></div> */}
        <Container>
            <div className="Skills">
                <h1> Tools and Technologies I use to bring projects to life:</h1>
                <Row xs={3} md={4} lg={6}>
                    <Col> 
                        <i class="devicon-cplusplus-plain"></i>
                        <p >C++</p>
                    </Col>
                    <Col> 
                        <i class="devicon-ruby-plain"></i>
                        <p >Ruby</p>
                    </Col>
                    <Col>
                        <i class="devicon-html5-plain"></i>
                        <p>HTML</p>
                    </Col>
                    <Col>
                        <i class="devicon-javascript-plain"></i>
                       <p>JavaScript</p>
                    </Col>
                    <Col>
                        <i class="devicon-css3-plain"></i>
                        <p>CSS</p>
                    </Col>

                    <Col> 
                        
                        <i class="devicon-react-original"></i>   
                        <p>React</p>
                    </Col>
                </Row>

                <Row xs={3} md={4} lg={6}>
                    <Col> 
                        <i class="devicon-python-plain"></i>
                        <p>Python</p>
                    </Col>
                    <Col>
                        <i class="devicon-github-original"></i> 
                        <p>Github</p>
                    </Col>
                    {/* <Col>
                        <i class="devicon-googlecloud-plain"></i>
                        <p>Google cloud</p>
                    </Col> */}
                    <Col>
                        <i class="devicon-azure-plain"></i>
                        <p>Azure</p>
                    </Col>
                    <Col>
                        <i class="devicon-jira-plain"></i>
                        <p>Jira</p>
                    </Col>

                    <Col>
                        <i class="devicon-jquery-plain"></i>
                        <p>Jquery</p>
                    </Col>
                    <Col> 
                        
                        <i class="devicon-figma-plain"></i>   
                        <p>Figma</p>
                    </Col>

                </Row>
                <Row xs={1} md={1} lg={1}>
                    <Col>
                        <i class="devicon-premierepro-plain"></i>
                        <p>Premiere Pro</p>
                    </Col>
                </Row>


            </div>
        </Container>
        {/* <div className="divider2">   <img src={divider2} alt="Header Img"/></div> */}
    </section>
  )
}