import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Logo.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Computer science student", "Web Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>{`Hey there! I'm Rawan.`}</h1>
                  {/* External links with fade-in effect */}
                  <div className="mt-4">
                    <a href="https://www.rawankitabat.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light me-2 fade-in fade-in-1">Blogs</a>
                    <a href="https://rawanpov.vercel.app/" target="_blank" className="btn btn-outline-light me-2 fade-in fade-in-2 custom-font ">Photography</a>
                    <a href="https://www.youtube.com/playlist?list=PLZswni9Vqi6kkxGei9INCFCebzIgxdrFB" target="_blank" className="btn btn-outline-light me-2 fade-in fade-in-3 custom-font ">Videography</a>
                    <a href="https://www.rawanalzubaidi.com/#Project-section" target="_blank" className="btn btn-outline-light fade-in fade-in-4 custom-font ">Software Projects</a>
                  </div>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}