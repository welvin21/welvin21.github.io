import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { Experience } from './Experience';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: 'Bachelor of Engineering in Computer Science',
    place: 'The University of Hong Kong',
    type: 'school',
    date: 'August 2018 - May 2022'
  },
  {
    title: 'Coding instructor intern',
    place: 'Koding Kingdom',
    type: 'work',
    date: 'May 2019 - August 2019'
  },
  {
    title: 'Full-stack developer intern',
    place: 'Banana Portal',
    type: 'work',
    date: 'June 2019 - July 2019'
  },
  {
    title: 'Winner',
    place: 'FinHack 2019 by Societe Generale and whub.io',
    type: 'award',
    date: 'June 2019'
  },
  {
    title: 'Teaching assistant (Introductory Python ENGG1330)',
    place: 'The University of Hong Kong',
    type: 'work',
    date: 'August 2019 - December 2019'
  },
  {
    title: 'Microsoft Student Partner',
    place: 'Microsoft Hong Kong',
    type: 'award',
    date: 'September 2019 - Present'
  },
  {
    title: `Runner up`,
    place: 'FinTech week hackathon 2019 by DBS Bank and HKECIC',
    type: 'award',
    date: 'November 2019'
  }
];

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(#4d4d4d, #737373)',
    width: '100vw',
    padding: 'min(5vw, 5vh)',
    paddingTop: 0,
    fontFamily: `'Arimo', sans-serif`,
    color: '#000'
  },
  title: {
    fontFamily: `'Source Sans Pro', sans-serif`,
    textAlign: 'center',
    color: '#fff',
    marginBottom: '5vh'
  }
});

export const Experiences = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} id="experiences">
      <h1 className={classes.title}>Experiences and achievements</h1>
      <VerticalTimeline>
        {experiences.map(experience => {
          const { title, place, type, date } = experience;
          return (
            <Experience
              key={title}
              title={title}
              place={place}
              type={type}
              date={date}
            />
          );
        })}
      </VerticalTimeline>
    </div>
  );
};
