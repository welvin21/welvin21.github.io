import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';

import { SEO, Layout, StyledLink } from '../components/';
import { LocationContext } from '../context';

const NotFoundPage: React.FC<any> = ({ location }) => (
  <LocationContext.Provider value={location}>
    <Layout isPathFinderEnabled={false}>
      <SEO title="404: Not found" />
      <Box>
        <Heading as="h2">NOT FOUND</Heading>
        <Text>
          You just hit a route that doesn&#39;t exist. Go back to{' '}
          <StyledLink href="/" children="homepage" isExternal={false} />{' '}
          instead?
        </Text>
      </Box>
    </Layout>
  </LocationContext.Provider>
);

export default NotFoundPage;
