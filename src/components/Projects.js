import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Container, Row, Col } from "react-bootstrap";
import divider2 from "../assets/img/blue_dark.png";
import mock from "../assets/img/mockup.png";
import tamumsa from "../assets/img/TamuMSA.png";
import howdyHack from "../assets/img/HowdyHack.png";
import csce315 from "../assets/img/cscs315.png";
import { Element } from 'react-scroll'
// import { BsLightbulbk } from "react-icons/bs";
//../assets/img/howdyhack/h1.png

export const Projects= () =>{
    return (
        <section className="Project-section" id="Project-section">
            <h1>A Selection of projects I've Built</h1>
            <Container className='projects'> 
                
                <Row xs={1} md={2} lg={2}>
                    <Col xs={{ order: 1 }} lg={{ order: 2 }} >
                        
                        <img src={tamumsa} alt="Header Img" />
                    </Col> 
                    <Col className="project-text"  xs={{ order: 2 }} lg={{ order: 1 }}>
                        <h2>Web development</h2>
                        <p>
                        Developed and designed a user-friendly website for Muslim student organization at Texas A&M University, to allow muslim student an easier access to resources. Using modern JavaScript frameworks, HTML, and CSS. Created a responsive UI to allow visitors across any device to have the same experience using Bootstrap and CSS.
                            <a href=" https://www.tamumsa.org/" target="_blank"> Checkout the website here </a> 
                        </p>
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-bootstrap-plain"></i>


                    </Col>
                    
                </Row>
                
                <Row xs={1} md={2} lg={2}>
                    <Col className="project-text"  xs={{ order: 2 }}>
                        <h2>Web development</h2>
                        <p>
                        Worked with a team of 4 using Agile methodologies, on designing and implementing an accessible web-based application that serves as point of sales systems of the Barnes and Nobles Starbucks. The objective of this project is in response to the current inefficient method of requiring a server per customer, leading to long waits for customers and more work for servers. Our project allows customers to place orders, servers to view placed orders and managers are able  to see all the sales trends, in table form with the ability to modify and update them.
                            {/* <a href="https://barnesandnoblecsce315-frontend.onrender.com/" target="_blank"> Checkout the UI here</a>  */}
                        </p>
                        <i class="devicon-react-original"></i>  
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-bootstrap-plain"></i>
                        <i class="devicon-azure-plain"></i>



                    </Col>
                    <Col  xs={{ order: 1 }}>
                        <img src={csce315} alt="Header Img"/>
                    </Col> 
                </Row>
                
                    <Row xs={1} md={2} lg={2}>
                        <Col className="project-text" xs={{ order: 2 }}>
                        <h2>Howdyhack</h2>
                                <p>
                                    Worked with a team of 4 to deploy a product in 24 hours. The project was a productivity app that allows the user to track assignments and create tasks. The app incorporates a timer that tells the user how much time was allocated for each task. Progress page collects the data from the timer and creates a pie chart/stats illustrating how much time is required. Due to time constraints we were able to design a UI and implement some of the functionality of the app using Python, Tkinter, and Figma. Read more about it on
                                    {/* <a href="https://devpost.com/software/reveille-reminder" target="_blank"> Devpost</a>  */}
                                </p>
                                <i class="devicon-figma-plain"></i> 

                        </Col>
                        <Col  lg={{ order: 2 }} xs={{ order: 1 }}>
                            <div className="HowdyImage"><img src={howdyHack} alt="Header Img"/></div>
                        </Col> 
                    </Row>
              
                {/* <h2>Research and Development</h2>
                <Row xs={1} md={1} lg={1}>
                    
                    <Col>
                        <p className="project-text" >
                        Along with 3 group members we conducted 50 interviews with remote workers and startups to identify a common problem within collaborative workspaces. Our interviews allowed us to branch to different focus. Throughout the whole process we presented weekly update and meetings, researched existing alternatives solutions, refined a solution that would assist business.
                        </p>
                    </Col>
                    
                </Row> */}
            </Container>
            <div className="divider2">   <img src={divider2} alt="Header Img"/></div>
        </section>

      )
};
