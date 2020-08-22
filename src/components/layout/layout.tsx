import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Grid, Image } from '@chakra-ui/core';

import { NavBar } from '../navbar/NavBar';

interface ILayoutComponentProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutComponentProps> = ({ children }) => {
  return (
    <Box backgroundColor="white" color="text.primary">
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
          <Box backgroundColor="#E8E8E8" />
          <Box mt={[5, 5, 0, 0]}>{children}</Box>
        </Grid>
      </Box>
    </Box>
  );
};

export { Layout };
