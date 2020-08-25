import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Box } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, SEO } from '../components';
import { MDXProviderComponents } from './MDXProviderComponents';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataQuery } from '../graphql';

const ProjectTemplate: React.FC<any> = props => {
  const { data, location } = props;

  const {
    mdx: {
      frontmatter: { title, date, path },
      body: content,
    },
    site: { siteMetadata },
  } = data;

  return (
    <LocationContext.Provider value={location}>
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Layout>
          <SEO title={title} />
          <Box>
            <Heading mb={4}>{title}</Heading>
            <MDXProvider components={MDXProviderComponents()}>
              <MDXRenderer>{content}</MDXRenderer>
            </MDXProvider>
          </Box>
        </Layout>
      </SiteMetadataContext.Provider>
    </LocationContext.Provider>
  );
};

export const projectsQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    site {
      ...SiteMetadata
    }
  }
`;

export default ProjectTemplate;
