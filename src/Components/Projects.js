import React from 'react';
import Project from './Project';
import sls from '../assets/images/sls.png';
import mig from '../assets/images/greenwall.png';
import navis from '../assets/images/navis.png';
import digibot from '../assets/images/digibot.png';
import pa from '../assets/images/personal-assistant.png';

const projects = [
  {
    pic : pa,
    title : 'Personal Assistant',
    desc : 'Speech recognition powered python script to automate your daily tasks such as checking the weather reports, opening web applications, or surfing through wikipedia.',
    url : 'http://www.github.com/welvin21/personal_assistant',
    tags : ['python','wikipediaAPI','openweathermapAPI','pyttsx3']
  },
  {
    pic : mig,
    title : 'Modular Integrated Greenwall',
    desc : 'Modular greenwall which implements sustainability development practice. Well-equipped with soil moisturizer sensor which supports self-watering functionality.',
    url : 'https://docs.google.com/presentation/d/1JWOyxk2L_tOsoNyJBNX-x5kVGDJEj3iK6HNTSZsYVww/edit?usp=sharing',
    tags : ['arduino']
  },
  {
    pic : sls,
    title : 'Smart Laundry System',
    desc : 'A washing machine tracker application by RCTech Club. Aims to ease the life of R.C. Lee hall residents by providing them the ability to track the status of each washing machines on the 16th floor anywhere, anytime.',
    url : 'http://sls.rctech.club',
    tags : ['python','javascript','react','AWS','firebase','arduino']
  },
  {
    pic : navis,
    title : 'Navis',
    desc : 'A centralized system to make data communication in the credit insurance escalation process faster.',
    url : 'http://www.navis-app.co',
    tags : ['javascript','react','express','firebase']
  },
  {
    pic : digibot,
    title : 'Digibot',
    desc : 'Virtual banking assistant focusing on bot interactions to make loan application process easier. Comprises text, voice, and click-based user interactions with well-designed UI.',
    url : 'http://rebrand.ly/chappuishalder',
    tags : ['javascript','react-native','AWS']
  },
];
const Projects = () => {
  return(
    <div className='projects-container' id='projects'>
      <h1 style={{color: '#fff'}}>Past works</h1>
      <div className='projects'>
        {
          projects.map(project => <Project key={project.title} project={project}/>)
        }
      </div>
    </div>
  );
}

export default Projects;