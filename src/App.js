import{
  BrowserRouter, 
  Routes,
  Route,
} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Testing } from "./components/Testing";
import { BackToTop } from "./components/BackToTop";
import Loading from './components/Loading'; 
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <NavBar />     
      <Banner />
      <AboutMe />
      <BackToTop />


      <Projects />
      <Skills />
      <Footer />
    </div>
    

  );
}

export default App;