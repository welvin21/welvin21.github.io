import React from 'react';
import { Icon } from 'antd';
import mypic from '../assets/images/mypic.png'

const Description = () => {
  return(
    <div className='description'>
      <h1>Hi everyone! I'm Welvin</h1>
      <p>A Computer Science sophomore at The University of Hong Kong.</p>
      <p>I enjoy taking complex problems and turning them into simple and efficient solutions. I also love the logic of coding and always aim to be better at it, be it developing an application, building a machine learning model, or solving a competitive programming problem.</p>
      <p>I like physics and everything related to space exploration.</p>
      <p>In my leisure time, I read science-fiction books and play the guitar. </p>
    </div>
  )
};

const socials = [
  {
    title : 'github',
    url : 'https://github.com/welvin21'
  },
  {
    title : 'linkedin',
    url : 'https://www.linkedin.com/in/welvin-bun-11067b170'
  },
  {
    title : 'instagram',
    url : 'https://www.instagram.com/welvin_21/'
  },
]

const openSocialMedia = social => {
  window.open(social.url,'_blank');
}

const About = () => {
  return(
    <div className='about' id='about'>
      <div className='content'>
        <img src={mypic} className='mypic' alt='mypic'/>
        <Description/>
        <div className='social'>
          <hr/>
          {socials.map(social => {
            return (
              <Icon className='social-icon' type={social.title} key={social.title} onClick={()=>openSocialMedia(social)}/>
            );
          })}
        </div>
      </div>
    </div>
  )
};

export default About;
