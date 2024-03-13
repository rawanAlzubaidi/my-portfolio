import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/github-sign.png";
import navIcon2 from "../assets/img/linkedin.png";
import navIcon3 from "../assets/img/instagram.png";
import {FaBloggerB} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
            <div className="social-icon">
              <a href="https://github.com/rawanAlzubaidi" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/rawan-alzubaidi/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/rawan.alzubaidii/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://www.rawankitabat.com/" target="_blank" rel="noopener noreferrer">  <FaBloggerB color="black"/> </a>
            </div>
      </Container>
      <p>© Rawan Alzubaidi 2024</p>

    </footer>
  )
}