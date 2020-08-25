import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Box, Text, Stack, useColorMode } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

import {
  SEO,
  Tags,
  PathFinder,
  PersonalInformation,
  Description,
  ColorModeSwitch,
  Footer,
} from '../components';
import { MDXProviderComponents } from './MDXProviderComponents';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataFragment, mdxFragment } from '../graphql';

deckDeckGoHighlightElement();

const BlogPostTemplate: React.FC<any> = ({ data, location }) => {
  const { colorMode } = useColorMode();

  const {
    mdx: {
      frontmatter: { title, date, path, tags },
      body: content,
    },
    site: { siteMetadata },
  } = data;

  return (
    <LocationContext.Provider value={location}>
      <SiteMetadataContext.Provider value={siteMetadata}>
        <SEO title={title} />
        <Box
          backgroundColor={`background.${colorMode}`}
          color={`text.${colorMode}`}
        >
          <Box m="0px auto" p="1.0875rem" maxWidth="800px" minHeight="100vh">
            <Stack>
              <PersonalInformation />
              <Description />
              <ColorModeSwitch />
            </Stack>
            <PathFinder />
            <Box mb={4}>
              <Heading>{title}</Heading>
              <Text as="b">{date.toUpperCase()}</Text>
            </Box>
            <MDXProvider components={MDXProviderComponents()}>
              <MDXRenderer>{content}</MDXRenderer>
            </MDXProvider>
            <Tags tags={tags} />
            <Footer />
          </Box>
        </Box>
      </SiteMetadataContext.Provider>
    </LocationContext.Provider>
  );
};

export const blogPostsQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      ...MdxFragment
      frontmatter {
        tags
      }
    }
    site {
      ...SiteMetadata
    }
  }
`;

export default BlogPostTemplate;
