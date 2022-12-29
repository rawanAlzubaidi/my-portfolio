import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import TrackVisibility from 'react-on-screen';

     // about me section changing img on click 
     function arabic(){
        document.getElementById('myImage')
        .src="img/rawanlogo/name.jpg";
    }
     
    function travel(){
        document.getElementById('myImage')
        .src="img/rawanlogo/travel.jpg";
    }
    function book(){
       document.getElementById('myImage')
       .src="img/rawanlogo/books.jpg";
   }
   function plant(){
       document.getElementById('myImage')
       .src="img/rawanlogo/plant.jpg";
   }
   function video(){
       document.getElementById('myImage')
       .src="img/rawanlogo/finish.jpg";
   }
   function reset(){
     document.getElementById('myImage')
     .src="img/rawanlogo/start.jpg";
 }



export const AboutMe = () => {
  return (
    <Container className='aboutMe'>  
    <h2>Howdyhack</h2>
    <Row xs={1} md={2} lg={2}>
        <Col  xs={{ order: 2 }}>
            <p>
            I am a junior studying Computer Science at Texas A&M. Aside from academic life, here are some random facts about me.
             I was born in Iraq, and my first language is Arabic. My name, Rawan, in Arabic is written as روان(right to left). I am fluent in Turkish and English and know some sign language.
              I TRAVELED a lot growing up. I lived in six countries, Syria, Egypt, Malaysia, Turkey, and have been living in the US for the past 7 years (this is the longest I have stayed in a country). 
              Where I became engulfed in every culture and despite the hardships that came with these changes, these experience have shaped me in who I am today. And if I could do it over again, 
              I wouldn’t change a thing. I love to READ, especially different literature from all around the world. I am a proud PLANT mom, I have plants in every corner of my apartment and I somehow have managed to keep them alive. 
              I have an obsession with doors. I like how intricate the designs can be and play into an overall the aesthetic of a building. And day by day, my doors album is growing, with now over 100 pictures.
               Door pictures are not the only thing I like to collect, I also have an extensive postcard collection. My current hometown is Austin, where I can fully indulge myself in nature. But my dream is to live in a city where I can commute everywhere with a bike.
                I want to be able to document the things I enjoy and bring it into one platform. Which is why, recently, I have been enjoying videography andVIDEO EDITING. Filming a short film or a documentary is on my bucket list.
            </p>

        </Col>
        <Col  xs={{ order: 1 }}>
            <div className="slide-container">
           

            </div>
        </Col> 
    </Row>

    </Container>

  )
}