import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';
import { graphql } from 'gatsby';

import { Layout, SEO, BlogPost } from '../components';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataQuery, mdxFragment } from '../graphql';
import { IBlogPost } from '../types';

const BlogPage: React.FC<any> = ({ data, location }) => {
  const {
    allMdx: { edges },
    site: { siteMetadata },
  } = data;
  const blogPosts: IBlogPost[] = edges.map(
    ({ node: { frontmatter: blogPost } }: any) => blogPost as IBlogPost
  );

  return (
    <LocationContext.Provider value={location}>
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Layout>
          <SEO title="Blog" />
          <Box>
            {blogPosts.map((blogPost: IBlogPost, index) => (
              <BlogPost key={index} {...blogPost} />
            ))}
          </Box>
        </Layout>
      </SiteMetadataContext.Provider>
    </LocationContext.Provider>
  );
};

export const blogPageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/blog-posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          ...MdxFragment
          frontmatter {
            tags
          }
        }
      }
    }
    site {
      ...SiteMetadata
    }
  }
`;

export default BlogPage;
