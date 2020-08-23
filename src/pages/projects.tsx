import React from 'react';
import { Heading, Box } from '@chakra-ui/core';
import { graphql } from 'gatsby';

import { Layout, SEO, Project } from '../components';
import { LocationContext } from '../context';
import { IProject } from '../types';

const ProjectsPage: React.FC<any> = ({ data, location }) => {
  const projects: IProject[] = data.allMdx.edges.map(
    ({ node: { frontmatter: project } }: any) => project as IProject
  );

  return (
    <LocationContext.Provider value={location}>
      <Layout>
        <SEO title="Projects" />
        <Box>
          <Heading mb={4}>Projects</Heading>
          {projects.map((project: IProject, index) => (
            <Project key={index} {...project} />
          ))}
        </Box>
      </Layout>
    </LocationContext.Provider>
  );
};

export const projectsQuery = graphql`
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
  }
`;

export default ProjectsPage;
