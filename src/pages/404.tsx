import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';
import { graphql } from 'gatsby';

import { SEO, Layout, StyledLink } from '../components/';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataQuery } from '../graphql';

const NotFoundPage: React.FC<any> = ({ data, location }) => (
  <LocationContext.Provider value={location}>
    <SiteMetadataContext.Provider value={data.site.siteMetadata}>
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
    </SiteMetadataContext.Provider>
  </LocationContext.Provider>
);

export const notFoundPageQuery = graphql`
  query {
    site {
      ...SiteMetadata
    }
  }
`;

export default NotFoundPage;
