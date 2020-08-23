import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Grid, Image, useColorMode } from '@chakra-ui/core';

import { NavBar } from '../navbar/';
import { Footer } from '../footer';
import { PathFinder } from '../common';

interface ILayoutComponentProps {
  children: React.ReactNode;
  isPathFinderEnabled?: boolean;
}

const Layout: React.FC<ILayoutComponentProps> = ({
  children,
  isPathFinderEnabled = true,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      backgroundColor={`background.${colorMode}`}
      color={`text.${colorMode}`}
    >
      <Box m="0px auto" p="0 1.0875rem" maxWidth="1000px" minHeight="100vh">
        <Grid
          templateColumns={['', '', '25% 1px auto', '25% 1px auto']}
          templateRows={['auto 1px auto', 'auto 1px auto', '', '']}
          py={[5, 5, 10, 10]}
          gridColumnGap={10}
        >
          <Box>
            <NavBar />
          </Box>
          <Box backgroundColor={`tertiary.${colorMode}`} />
          <Box my={[5, 5, 0, 0]}>
            {isPathFinderEnabled && <PathFinder />}
            {children}
          </Box>
          <Box
            display={['flex', 'flex', 'none', 'none']}
            borderTop="1px solid"
            borderColor={`tertiary.${colorMode}`}
          >
            <Footer />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export { Layout };
