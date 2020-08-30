import React from 'react';
import { Heading, Text, Box, List, ListItem } from '@chakra-ui/core';
import { graphql } from 'gatsby';

import { Layout, SEO, StyledLink } from '../components';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataFragment } from '../graphql';

const TagsPage: React.FC<any> = ({ data, location }) => {
  const {
    allMdx: { edges },
    site: { siteMetadata },
  } = data;

  const tagsCount: { [tag: string]: number } = {};

  for (const {
    node: { frontmatter: blogPost },
  } of edges) {
    for (const tag of blogPost.tags) {
      if (!Object.keys(tagsCount).includes(tag)) {
        tagsCount[tag] = 1;
      } else {
        tagsCount[tag] += 1;
      }
    }
  }

  return (
    <LocationContext.Provider value={location}>
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Layout>
          <SEO title="Tags" />
          <List styleType="disc">
            {Object.keys(tagsCount).map((tag: string, index: number) => (
              <ListItem key={index}>
                <StyledLink
                  isExternal={false}
                  href={`/tags/${tag.toLowerCase().replace(' ', '-')}`}
                >
                  {`${tag} (${tagsCount[tag]})`}
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </Layout>
      </SiteMetadataContext.Provider>
    </LocationContext.Provider>
  );
};

export const tagsPageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/blog-posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
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

export default TagsPage;
