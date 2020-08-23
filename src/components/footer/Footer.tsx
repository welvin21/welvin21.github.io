import React from 'react';
import { Text, Flex, useColorMode } from '@chakra-ui/core';

import { Contacts } from '../contacts';

export const Footer: React.FC = () => {
  const { colorMode } = useColorMode();
  const footerColor =
    colorMode === 'dark' ? `text.${colorMode}` : `tertiary.${colorMode}`;

  return (
    <Flex color={footerColor} direction="column" align="center" w="100%" mt={4}>
      <Text>© Welvin Bun 2020</Text>
      <Contacts color={footerColor} />
    </Flex>
  );
};
