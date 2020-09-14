import React, { useState } from 'react';
import { Heading, Text, Box } from '@chakra-ui/core';
import { graphql } from 'gatsby';

import { Layout, SEO, BlogPost, Pagination } from '../components';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataFragment, mdxFragment } from '../graphql';
import { IBlogPost } from '../types';

const BlogPage: React.FC<any> = ({ data, location }) => {
  const [page, setPage] = useState<number>(1);
  const POST_PER_PAGE = 5;
  const postIndexLowerBound = (page - 1) * POST_PER_PAGE;
  const postIndexUpperBound = page * POST_PER_PAGE - 1;

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
          <SEO title={`Blog | Page ${page}`} />
          <Box>
            {blogPosts.map(
              (blogPost: IBlogPost, index) =>
                index >= postIndexLowerBound &&
                index <= postIndexUpperBound && (
                  <BlogPost key={index} {...blogPost} />
                )
            )}
          </Box>
          <Pagination
            count={Math.ceil(blogPosts.length / POST_PER_PAGE)}
            page={page}
            onChange={(_, page: number) => setPage(page)}
          />
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
