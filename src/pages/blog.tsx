import React from 'react';
import { Heading, Text } from '@chakra-ui/core';

import { Layout, SEO, CommingSoon } from '../components';
import { LocationContext } from '../context';

const BlogPage: React.FC<any> = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Blog" />
        <CommingSoon />
      </Layout>
    </LocationContext.Provider>
  );
};

export default BlogPage;
