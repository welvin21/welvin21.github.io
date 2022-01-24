import React from 'react';
import { Box, Text } from '@chakra-ui/core';

import { StyledLink } from '../common';

export const AboutWebsite: React.FC = () => {
  return (
    <Box>
      <Text>
        This website was built by me using{' '}
        <StyledLink href="https://www.gatsbyjs.com/" children="GatsbyJS" />,
        written mainly on{' '}
        <StyledLink
          href="https://www.typescriptlang.org/"
          children="TypeScript"
        />
        , and is on{' '}
        <StyledLink
          href="https://github.com/welvin21/personal_website"
          children="GitHub"
        />
        .
      </Text>
    </Box>
  );
};
