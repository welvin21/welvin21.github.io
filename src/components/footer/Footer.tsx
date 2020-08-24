import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Text, Flex, useColorMode } from '@chakra-ui/core';

import { Contacts } from '../contacts';

export const Footer: React.FC = () => {
  const {
    site: {
      siteMetadata: { lastUpdated },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          lastUpdated
        }
      }
    }
  `);
  const { colorMode } = useColorMode();
  const footerColor =
    colorMode === 'dark' ? `text.${colorMode}` : `tertiary.${colorMode}`;

  return (
    <Flex color={footerColor} direction="column" align="center" w="100%" mt={4}>
      <Text textAlign="center">{`© Welvin Bun 2020 | Updated on ${lastUpdated}`}</Text>
      <Contacts color={footerColor} />
    </Flex>
  );
};
