import { graphql } from 'gatsby';

export const siteMetadataQuery = graphql`
  fragment SiteMetadata on Site {
    siteMetadata {
      url
      siteUrl
      description
      title
      lastUpdated
      menu {
        text
        route
      }
      author {
        name
        picturePath
        contacts {
          email {
            name
            link
          }
          twitter {
            name
            link
          }
          github {
            name
            link
          }
          linkedin {
            name
            link
          }
        }
        hackathons {
          name
          organiser
          achievement
          link
        }
      }
    }
  }
`;
