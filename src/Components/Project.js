import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Collapse } from '@material-ui/core';
import {
  GitHub,
  LaunchRounded,
  ExpandMore,
  ExpandLess
} from '@material-ui/icons';
import { Tag, notification } from 'antd';
import 'antd/dist/antd.css';

const useStyles = makeStyles(theme => ({
  picture: {
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  buttons: {
    float: 'left',
    marginBottom: 10,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: 'min(10%,10px)'
  }
}));

const identifyTag = tag => {
  const languages = ['python', 'javascript', 'java', 'c++'];

  let color = 'magenta';
  if (languages.includes(tag)) {
    color = 'blue';
  } else {
    color = 'green';
  }
  return (
    <Tag key={tag} className="tag" color={color}>
      {tag}
    </Tag>
  );
};

const openMessage = () => {
  notification.error({
    message: 'Code is not available for this project.',
    description: 'Please kindly check my other projects!'
  });
};

const Project = ({ project: { pic, title, desc, url, github, tags } }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const classes = useStyles();

  return (
    <div className="project-card">
      <div>
        <img className={classes.picture} src={pic} alt={title} />
      </div>
      <Collapse
        style={{ padding: '0px 10px' }}
        in={isCollapsed}
        collapsedHeight={1}
        timeout={1000}
      >
        <div style={{ paddingTop: 10 }}>
          {tags.map(tag => identifyTag(tag))}
        </div>
        <h2 style={{ color: '#4d4d4d', marginBottom: 0 }}>{title}</h2>
        <p style={{ marginTop: 5 }}>{desc}</p>
        <div className={classes.buttons}>
          <LaunchRounded
            style={{ fontSize: 'min(30px, 150%)' }}
            className="project-button"
            onClick={() => {
              window.open(url, '_blank', 'noopener');
            }}
          />
          <GitHub
            style={{ fontSize: 'min(30px, 150%)' }}
            className="project-button"
            onClick={() => {
              github
                ? window.open(github, '_blank', 'noopener')
                : openMessage();
            }}
          />
        </div>
      </Collapse>
      <Button fullWidth={true} onClick={() => setCollapsed(!isCollapsed)}>
        {isCollapsed ? <ExpandLess /> : <ExpandMore />}
      </Button>
    </div>
  );
};

export default Project;
