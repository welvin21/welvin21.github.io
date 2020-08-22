import React from 'react';
import { Text, Flex } from '@chakra-ui/core';

import { Contacts } from '../contacts';

export const Footer: React.FC = () => {
  return (
    <Flex color="#808080" direction="column" align="center" w="100%" my={2}>
      <Text>© Welvin Bun 2020</Text>
      <Contacts />
    </Flex>
  );
};
