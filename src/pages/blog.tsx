import React from 'react';
import { Heading, Text } from '@chakra-ui/core';

import { Layout, SEO, ComingSoon } from '../components';
import { LocationContext } from '../context';

const BlogPage: React.FC<any> = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Blog" />
        <ComingSoon />
      </Layout>
    </LocationContext.Provider>
  );
};

export default BlogPage;
