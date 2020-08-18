import React from 'react';
import { Heading, Text } from '@chakra-ui/core';

import { Layout, SEO } from '../components';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Heading>The website is currently under maintainance</Heading>
    </Layout>
  );
};

export default IndexPage;
