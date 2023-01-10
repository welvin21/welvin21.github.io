import React from 'react';
import { Flex, Text, Heading, useColorMode } from '@chakra-ui/core';

import { StyledLink } from '../common';

export const Description: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex my={1} direction="column">
      <Heading mb={2}>About me</Heading>
      <Text color={`text.${colorMode}`}>
        {`I enjoy doing stuffs revolving around software engineering, machine learning, and algorithms. Here are some of the `}
        <StyledLink href="/projects" isExternal={false}>
          projects
        </StyledLink>
        {` that I've worked on before:`}
      </Text>
    </Flex>
  );
};
