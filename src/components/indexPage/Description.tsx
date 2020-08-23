import React from 'react';
import { Flex, Text, Heading, useColorMode } from '@chakra-ui/core';

import { StyledLink } from '../common';

export const Description: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex my={1} direction="column">
      <Heading mb={2}>About me</Heading>
      <Text color={`text.${colorMode}`}>
        {`I study computer science at `}
        <StyledLink href="https://www.hku.hk">HKU</StyledLink>
        {` (class of 2022), and I've done Data Science and SWE internships at `}
        <StyledLink href="https://societegenerale.com">
          Societe Generale
        </StyledLink>
        {` and `}
        <StyledLink href="https://freehunter.io/">Freehunter</StyledLink>
        {` respectively before. I enjoy doing web development, machine learning, and algorithms. Here are some of the `}
        <StyledLink href="/projects" isExternal={false}>
          projects
        </StyledLink>
        {` that I've worked on before:`}
      </Text>
    </Flex>
  );
};
