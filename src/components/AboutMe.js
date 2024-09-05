import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export const AboutMe = () => {
  //keep track of which content is currently active
  const [activeContent, setActiveContent] = useState('short');

  //content for each button
  const content = {
    short: <p>Hey there, I am a software developer in Houston.</p>,
    longer: <p>Hello! I'm a software developer based in Houston. I earned my degree in computer science from Texas A&M University. I'm passionate about turning ideas into reality, especially when it allows me to blend my varied interests.</p>,
    long: (
      <p>
        I was born in Iraq, and my first language is Arabic. My name, Rawan, in Arabic is written as روان (right to left). I am fluent in Turkish and English. Growing up, I had the privilege of living in six different countries, Syria, Egypt, Malaysia, Turkey, and now the United States for the past 9 years (this is the longest I have stayed in a country). This has given me a unique perspective and a deep appreciation for different cultures. I love to read, especially different literature from all around the world. I currently call Austin and Houston home. I have a passion for videography and video editing. I love being able to document the things I enjoy and bring them to life. One of my biggest aspirations is to film a short film or a documentary combining my love of storytelling and technology. Okay now that we are besties... I share some blogs, stories, reflections in this blog feel free to check it out. <a href="https://www.rawankitabat.com" target="_blank" rel="noopener noreferrer"> Kitabat</a>
      </p>
    )
  };

  //updates the state to the corresponding content key
  const toggleContent = (contentKey) => {
    setActiveContent(contentKey);
  };

  return (
    <section> 
      <Container className='aboutMe' id="AboutMe">  
        <div className="headers"><h1>Get to know me!</h1></div>
        

        <div className="content-buttons">
          <button
              onClick={() => toggleContent('short')}
              className={activeContent === 'short' ? 'active' : ''}
            >
              short
            </button>
            <button
              onClick={() => toggleContent('longer')}
              className={activeContent === 'longer' ? 'active' : ''}
            >
              longer
            </button>
            <button
              onClick={() => toggleContent('long')}
              className={activeContent === 'long' ? 'active' : ''}
            >
              Lets get personal
          </button>
        </div>
        <p>{content[activeContent]}</p>
      </Container>
    </section>
  )
}
