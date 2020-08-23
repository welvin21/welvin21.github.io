import React from 'react';

import { Layout, SEO } from '../components';
import {
  Description,
  HighlightProjects,
  Awards,
  AboutWebsite,
} from '../components/indexPage';
import { LocationContext } from '../context';

const IndexPage: React.FC<any> = ({ location }) => {
  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="About" />
        <Description />
        <HighlightProjects />
        <Awards />
        <AboutWebsite />
      </Layout>
    </LocationContext.Provider>
  );
};

export default IndexPage;
