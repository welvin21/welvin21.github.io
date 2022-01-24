import React, { useContext } from 'react';
import { Text, Flex, useColorMode } from '@chakra-ui/core';

import { Contacts } from '../contacts';
import { SiteMetadataContext } from '../../context';

export const Footer: React.FC = () => {
  const { lastUpdated } = useContext(SiteMetadataContext);
  const { colorMode } = useColorMode();
  const footerColor =
    colorMode === 'dark' ? `text.${colorMode}` : `tertiary.${colorMode}`;

  return (
    <Flex color={footerColor} direction="column" align="center" w="100%" mt={4}>
      <Text textAlign="center">{`© Welvin Bun 2022 | Updated on ${lastUpdated}`}</Text>
      <Contacts color={footerColor} />
    </Flex>
  );
};
