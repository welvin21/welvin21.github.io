import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, Icon, Box } from '@chakra-ui/core';

import { StyledLink } from '../common';

const Contact: React.FC<{ href: string; name: string }> = props => {
  return (
    <StyledLink
      href={props.href}
      color="text.primary"
      _hover={{ color: 'primary.400' }}
    >
      <Box
        mx={2}
        border="1px solid #E8E8E8"
        w="2em"
        h="2em"
        textAlign="center"
        rounded="full"
      >
        <Icon name={props.name} />
      </Box>
    </StyledLink>
  );
};

export const Contacts: React.FC = () => {
  const {
    site: {
      siteMetadata: {
        author: { contacts },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              contacts {
                twitter {
                  link
                }
                email {
                  link
                }
                github {
                  link
                }
                linkedin {
                  link
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Flex my={2}>
      {Object.keys(contacts).map((name: string, index: number) => (
        <Contact key={index} name={name} href={contacts[name].link} />
      ))}
    </Flex>
  );
};
