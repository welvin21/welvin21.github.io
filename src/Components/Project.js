import React from 'react';
import { Tag } from 'antd';

const identifyTag = tag => {
  const languages = ['python','javascript','java','c++'];
  const libraries = ['react','react-native','express','redux'];
  const clouds = ['firebase','AWS','azure'];

  let color = '#f50';
  if(languages.includes(tag)){
    color = '#2db7f5';
  }else if(libraries.includes(tag) || tag.toLowerCase().includes('api')){
    color = '#87d068';
  }else if(clouds.includes(tag)){
    color = '#108ee9';
  }
  return <Tag key={tag} className='tag' color={color}>{tag}</Tag>;
}

const Project = props => {
  const { project : {pic, title, desc, url,tags}} = props;
  return(
    <div className='project-card' onClick={() => {window.open(url,'_blank')}}>
      <div>
        <img style={{width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5}} src={pic} alt={title}/>
      </div>
      <div style={{padding: '0px 10px'}}>
        <div style={{paddingTop: 10}}>
          {tags.map(tag => identifyTag(tag))}
        </div>
        <h2 style={{color: '#4d4d4d',marginBottom: 0}}>{title}</h2>
        <p style={{paddingBottom: 10,marginTop: 5}}>{desc}</p>
      </div>
    </div>
  );
}

export default Project;