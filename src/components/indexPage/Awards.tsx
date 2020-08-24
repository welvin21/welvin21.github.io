import React from 'react';
import { Flex, Text, Box, ListItem } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

import { Hackathon } from '../../types';
import { StyledLink } from '../common';

export const Awards: React.FC = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            hackathons {
              name
              organiser
              achievement
              link
            }
          }
        }
      }
    }
  `);

  const {
    author: { hackathons },
  } = siteMetadata;

  return (
    <Flex my={1} direction="column">
      <Text>
        {`Outside of school and/or work, I usually spend my free time reading books, jamming on the guitar, or shooting basketball. I like participating in hackathons as well, some of my most memorable hacks experiences are:`}
      </Text>
      <Box mt={2} mb={10} ml={2}>
        {hackathons.map((hackathon: Hackathon, index: number) => (
          <ListItem key={index}>
            <StyledLink href={hackathon.link} children={hackathon.name} />
            {` by ${hackathon.organiser}`}{' '}
            {hackathon.achievement && <b>({hackathon.achievement})</b>}
          </ListItem>
        ))}
      </Box>
    </Flex>
  );
};
