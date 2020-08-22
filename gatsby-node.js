exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const ProjectTemplate = require.resolve(
    `./src/templates/ProjectTemplate.tsx`
  );

  const projects = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/src/projects/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  projects.data.allMdx.edges.forEach(
    ({
      node: {
        frontmatter: { path },
      },
    }) => {
      createPage({
        path,
        component: ProjectTemplate,
        context: {},
      });
    }
  );
};
