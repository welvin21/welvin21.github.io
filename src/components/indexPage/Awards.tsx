import React, { useContext } from 'react';
import { Flex, Text, Box, ListItem } from '@chakra-ui/core';

import { Hackathon } from '../../types';
import { StyledLink } from '../common';
import { SiteMetadataContext } from '../../context';

export const Awards: React.FC = () => {
  const {
    author: { hackathons },
  } = useContext(SiteMetadataContext);

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
