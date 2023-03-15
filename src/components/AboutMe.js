import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import TrackVisibility from 'react-on-screen';
import divider2 from "../assets/img/navy_dark.png";

     // about me section changing img on click 

export const AboutMe = () => {
    
  return (
  <section> 
    <Container className='aboutMe' id="AboutMe">  
      <div className="headers"><h1>Get to know me!</h1></div>
        <p>As a Computer Science junior at Texas A&M, I am constantly learning and growing in the field of technology. But there is much more to me than just academia. I was born in Iraq, and my first language is Arabic. My name, Rawan, in Arabic is written as روان (right to left). I am fluent in Turkish and English and know some sign language.
        Growing up, I had the privilege of living in six different countries, including Syria, Egypt, Malaysia, Turkey, and now the United States for the past 7 years (this is the longest I have stayed in a country).  This has given me a unique perspective and a deep appreciation for different cultures.
          I love to read, especially different literature from all around the world.  I am also a proud plant mom, and my apartment is filled with greenery in every corner.
          I currently call Austin my home, where I can fully indulge myself in nature.
            I have discovered a passion for videography and video editing. I love being able to document the things I enjoy and bring them into one platform. One of my biggest aspirations is to film a short film or a documentary, combining my love of storytelling and technology. I believe that with hard work and determination, anything is possible, and I am excited to see where this journey takes me.
        </p>

    </Container>
    <div className="divider2">   <img src={divider2} alt="Header Img"/></div>
    </section>

  )
}