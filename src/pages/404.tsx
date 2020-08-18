import React from 'react';
import { Heading, Text } from '@chakra-ui/core';

import { SEO, Layout } from '../components/';

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading as="h2">NOT FOUND</Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </Layout>
);

export default NotFoundPage;
