import React from 'react';
import { Icon } from 'antd';

const items = [
  {
    title : 'Home',
    id : 'home'
  },
  {
    title : 'About',
    id : 'about'
  },
  {
    title : 'Projects',
    id : 'projects'
  }
];

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
];

const Header = () => {
  return(
    <div className='header'>
      <div className='header-left'>
        {items.map(item => {
          return(
            <p className='item' key={item.title} onClick={()=>{document.getElementById(item.id).scrollIntoView()}}>{item.title}</p>
          );
        })}
        <p className='item' key='resume' onClick={()=>window.open(process.env.PUBLIC_URL + '/assets/resume.html','_blank')}>Resume</p>
      </div>

      <div className='header-right'>
        {socials.map(social => {
          return (
            <Icon className='social-icon' type={social.title} key={social.title} onClick={()=>{window.open(social.url,'_blank')}}/>
          );
        })}
      </div>
    </div>
  );
}

export default Header;