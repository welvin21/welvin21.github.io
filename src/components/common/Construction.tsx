import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export const Construction: React.FC = () => {
  return (
    <Flex direction="column">
      <Text fontSize={['2xl', '2xl', '6xl', '6xl']} m={0}>
        Under Construction
      </Text>
      <Text>
        My website is currently undergoing a revamping process. It should be
        back shortly, thanks for the patience.
      </Text>
    </Flex>
  );
};
