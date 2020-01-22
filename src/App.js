import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return(
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </div>

  );
}

export default App;
