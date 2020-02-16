import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SchoolRounded as School, Work, Star } from '@material-ui/icons';
import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles({
  title: {
    fontWeight: 600
  },
  subtitle: {
    color: '#333333'
  }
});

const propDetails = {
  work: {
    className: 'vertical-timeline-element--work',
    color: 'rgb(33, 150, 243)'
  },
  school: {
    className: 'vertical-timeline-element--education',
    color: 'rgb(233, 30, 99)'
  },
  award: {
    className: 'vertical-timeline-element--award',
    color: 'rgb(16, 204, 82)'
  }
};

export const Experience = ({ title, place, type, date, desc }) => {
  const { className, color } = propDetails[type];
  const classes = useStyles();

  return (
    <VerticalTimelineElement
      className={className}
      contentStyle={{ borderTop: `3px solid ${color}` }}
      date={date}
      iconStyle={{ background: color, color: '#fff' }}
      icon={
        type === 'work' ? <Work /> : type === 'school' ? <School /> : <Star />
      }
    >
      <Typography
        className={`vertical-timeline-element-title ${classes.title}`}
        variant="h6"
      >
        {title}
      </Typography>
      <Typography
        className={`vertical-timeline-element-subtitle ${classes.subtitle}`}
        variant="subtitle1"
      >{`@${place}`}</Typography>
    </VerticalTimelineElement>
  );
};
