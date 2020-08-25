import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout, SEO } from '../components';
import {
  Description,
  HighlightProjects,
  Awards,
  AboutWebsite,
} from '../components/indexPage';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataFragment } from '../graphql';

const IndexPage: React.FC<any> = ({ data, location }) => {
  const {
    site: { siteMetadata },
  } = data;

  return (
    <LocationContext.Provider value={location}>
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Layout>
          <SEO title="About" />
          <Description />
          <HighlightProjects />
          <Awards />
          <AboutWebsite />
        </Layout>
      </SiteMetadataContext.Provider>
    </LocationContext.Provider>
  );
};

export const indexPageQuery = graphql`
  query {
    site {
      ...SiteMetadata
    }
  }
`;

export default IndexPage;
