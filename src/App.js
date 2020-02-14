import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { Loader } from './Components/Loader';
import './App.css';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
