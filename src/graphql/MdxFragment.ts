import { graphql } from 'gatsby';

export const mdxFragment = graphql`
  fragment MdxFragment on Mdx {
    frontmatter {
      title
      path
      excerpt
      date(formatString: "MMMM DD, YYYY")
    }
    body
  }
`;
