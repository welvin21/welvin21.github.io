import React from 'react';
import { Heading, Box } from '@chakra-ui/core';
import { graphql } from 'gatsby';

import { Layout, SEO, Project } from '../components';
import { LocationContext, SiteMetadataContext } from '../context';
import { siteMetadataQuery } from '../graphql';
import { IProject } from '../types';

const ProjectsPage: React.FC<any> = ({ data, location }) => {
  const {
    allMdx: { edges },
    site: { siteMetadata },
  } = data;
  const projects: IProject[] = edges.map(
    ({ node: { frontmatter: project } }: any) => project as IProject
  );

  return (
    <LocationContext.Provider value={location}>
      <SiteMetadataContext.Provider value={siteMetadata}>
        <Layout>
          <SEO title="Projects" />
          <Box>
            {projects.map((project: IProject, index) => (
              <Project key={index} {...project} />
            ))}
          </Box>
        </Layout>
      </SiteMetadataContext.Provider>
    </LocationContext.Provider>
  );
};

export const projectsPageQuery = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/src/projects/" } }
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
          }
        }
      }
    }
    site {
      ...SiteMetadata
    }
  }
`;

export default ProjectsPage;
