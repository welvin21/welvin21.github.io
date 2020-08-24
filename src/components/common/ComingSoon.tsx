import React from 'react';
import { Flex, Text } from '@chakra-ui/core';

export const ComingSoon: React.FC = () => {
  return (
    <Flex direction="column">
      <Text fontSize={['2xl', '2xl', '4xl', '4xl']} m={0}>
        Coming Soon
      </Text>
      <Text>
        The section you are looking at is currently being built. It should be
        ready soon, thanks for the patience.
      </Text>
    </Flex>
  );
};
