import React from 'react';
import { Box } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

import { Project } from '../project';
import { IProject } from '../../types';

export const HighlightProjects: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            fileAbsolutePath: { regex: "/src/projects/" }
            frontmatter: { title: { in: ["Sort It", "Fixels", "SLS"] } }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
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
    `
  );

  const projects: IProject[] = edges.map(
    ({ node: { frontmatter: project } }: any) => project as IProject
  );

  return (
    <Box mt={2} mb={10} ml={4}>
      {projects.map((project: IProject, index) => (
        <Project key={index} {...project} />
      ))}
    </Box>
  );
};
