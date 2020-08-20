import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/core';

import { NavBar } from '../navbar/NavBar';

interface ILayoutComponentProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutComponentProps> = ({ children }) => {
  return (
    <Box backgroundColor="white" color="text.primary" minHeight="100vh">
      <Box m="10px auto" p="0 1.0875rem 1.45rem" maxWidth="960px">
        <Flex minHeight="80vh" direction="column" justify="center">
          <NavBar />
          {children}
        </Flex>
      </Box>
    </Box>
  );
};

export { Layout };
