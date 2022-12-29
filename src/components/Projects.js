import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Container, Row, Col } from "react-bootstrap";

//../assets/img/howdyhack/h1.png
const slideImages = [
    {
      url: 'assets/img/howdyhack/h1.png',
      caption: 'Slide 1'
    },
    {
      url: 'images/slide_3.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'images/slide_4.jpg',
      caption: 'Slide 3'
    },
  ];
export const Projects= () =>{
    return (
        <Container className='projects'>  
            <h2>Howdyhack</h2>
            <Row xs={1} md={2} lg={2}>
                <Col  xs={{ order: 2 }}>
                    <p>
                        Worked with a team of 4 to deploy a product in 24 hours. The project was a productivity app that allows the user to track assignments and create tasks. The app incorporates a timer that tells the user how much time was allocated for each task. Progress page collects the data from the timer and creates a pie chart/stats illustrating how much time is required. Due to time constraints we were able to design a UI and implement some of the functionality of the app using Python, Tkinter, and Figma. Read more about it on
                        <a href="https://devpost.com/software/reveille-reminder" target="_blank"> devpost</a> 
                    </p>

                </Col>
                <Col  xs={{ order: 1 }}>
                    <div className="slide-container">
                    <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div className="each-slide" key={index}>
                            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <span>{slideImage.caption}</span>
                            </div>
                        </div>
                        ))} 
                    </Slide>
                    </div>
                </Col> 
            </Row>

            <h2>Web development</h2>
            <Row xs={1} md={2} lg={2}>
                <Col xs={{ order: 1 }} lg={{ order: 2 }} >
                        <div className="slide-container">
                        <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div className="each-slide" key={index}>
                                <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                                <span>{slideImage.caption}</span>
                                </div>
                            </div>
                            ))} 
                        </Slide>
                        </div>
                    </Col> 
                <Col  xs={{ order: 2 }} lg={{ order: 1 }}>
                    <p>
                    Developed and designed a user-friendly website for Muslim student organization at Texas A&M University, to allow muslim student an easier access to resources. Using modern JavaScript frameworks, HTML, and CSS. Created a responsive UI to allow visitors across any device to have the same experience using Bootstrap and CSS.
                        <a href=" https://www.tamumsa.org/" target="_blank"> Checkout the website here </a> 
                    </p>

                </Col>
                
            </Row>
            <h2>Web development</h2>
            <Row xs={1} md={2} lg={2}>
                <Col  xs={{ order: 2 }}>
                    <p>
                    Worked with a team of 4 using Agile methodologies, on designing and implementing an accessible web-based application that serves as point of sales systems of the Barnes and Nobles Starbucks. The objective of this project is in response to the current inefficient method of requiring a server per customer, leading to long waits for customers and more work for servers. Our project allows customers to place orders, servers to view placed orders and managers are able  to see all the sales trends, in table form with the ability to modify and update them.
                        <a href="https://barnesandnoblecsce315-frontend.onrender.com/" target="_blank"> Checkout the UI here</a> 
                    </p>

                </Col>
                <Col  xs={{ order: 1 }}>
                    <div className="slide-container">
                    <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div className="each-slide" key={index}>
                            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                            <span>{slideImage.caption}</span>
                            </div>
                        </div>
                        ))} 
                    </Slide>
                    </div>
                </Col> 
            </Row>

        </Container>

      )
};
