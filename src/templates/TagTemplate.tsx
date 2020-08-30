import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Box } from '@chakra-ui/core';

import { Layout, SEO, BlogPost } from '../components';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataFragment } from '../graphql';
import { IBlogPost } from '../types';

const TagTemplate: React.FC<any> = props => {
  const {
    data,
    location,
    pageContext: { tag, posts },
  } = props;

  const {
    site: { siteMetadata },
  } = data;

  return (
    <LocationContext.Provider value={location}>
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Layout>
          <SEO title={tag} />
          <Box>
            <Heading mb={4}>{tag}</Heading>
            <Box>
              {posts.map((post: IBlogPost, index: number) => (
                <BlogPost key={index} {...post} />
              ))}
            </Box>
          </Box>
        </Layout>
      </SiteMetadataContext.Provider>
    </LocationContext.Provider>
  );
};

export const tagsPageQuery = graphql`
  query {
    site {
      ...SiteMetadata
    }
  }
`;

export default TagTemplate;
