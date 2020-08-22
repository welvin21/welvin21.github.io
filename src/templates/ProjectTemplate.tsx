import React from 'react';
import { graphql } from 'gatsby';
import { Heading, Text, Box, Divider } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Layout, SEO, StyledLink } from '../components';
import { MDXProviderComponents } from './MDXProviderComponents';
import { LocationContext } from '../context';

const ProjectTemplate: React.FC<any> = props => {
  const { data, location } = props;

  const {
    mdx: {
      frontmatter: { title, date, path },
      body: content,
    },
  } = data;

  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title={title} />
        <Box>
          <Text>
            <StyledLink
              href="/projects"
              isExternal={false}
              children="projects"
            />{' '}
            >{' '}
            <StyledLink
              href={path}
              isExternal={false}
              children={title.toLowerCase()}
            />
          </Text>
          <Divider backgroundColor="#808080" />
          <Heading my={4}>{title}</Heading>
          <MDXProvider components={MDXProviderComponents()}>
            <MDXRenderer>{content}</MDXRenderer>
          </MDXProvider>
        </Box>
      </Layout>
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
  }
`;

export default ProjectTemplate;
