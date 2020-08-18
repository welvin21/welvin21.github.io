import React from 'react';
import { Header } from './Components/Header';
import { About } from './Components/About';
import { Projects } from './Components/Projects';
import { Experiences } from './Components/Experiences';
import { Footer } from './Components/Footer';
import './App.css';

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </>
  );
};
