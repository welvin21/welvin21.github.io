import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';
import { graphql } from 'gatsby';

import { Layout, SEO, BlogPost } from '../components';
import { LocationContext } from '../context';
import { IBlogPost } from '../types';

const BlogPage: React.FC<any> = ({ data, location }) => {
  const blogPosts: IBlogPost[] = data.allMdx.edges.map(
    ({ node: { frontmatter: blogPost } }: any) => blogPost as IBlogPost
  );

  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Blog" />
        <Box>
          {blogPosts.map((blogPost: IBlogPost, index) => (
            <BlogPost key={index} {...blogPost} />
          ))}
        </Box>
      </Layout>
    </LocationContext.Provider>
  );
};

export const blogPostsQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/blog-posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
            tags
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
