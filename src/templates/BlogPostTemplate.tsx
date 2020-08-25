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
import { LocationContext } from '../context';

deckDeckGoHighlightElement();

const BlogPostTemplate: React.FC<any> = props => {
  const { data, location } = props;
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
      <SEO title={title} />
      <Box
        backgroundColor={`background.${colorMode}`}
        color={`text.${colorMode}`}
      >
        <Box m="0px auto" p="1.0875rem" maxWidth="800px" minHeight="100vh">
          <Stack>
            <PersonalInformation siteMetadata={siteMetadata} />
            <Description />
            <ColorModeSwitch />
          </Stack>
          <PathFinder />
          <Heading mb={4}>{title}</Heading>
          <MDXProvider components={MDXProviderComponents()}>
            <MDXRenderer>{content}</MDXRenderer>
          </MDXProvider>
          <Tags tags={tags} />
          <Footer />
        </Box>
      </Box>
    </LocationContext.Provider>
  );
};

export const blogPostsQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
    site {
      siteMetadata {
        author {
          name
          picturePath
          contacts {
            twitter {
              name
              link
            }
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
