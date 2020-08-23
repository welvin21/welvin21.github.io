import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Flex, Icon, Box } from '@chakra-ui/core';

import { StyledLink } from '../common';

interface ContactsProps {
  color: string;
}

interface ContactProps {
  href: string;
  name: string;
  color: string;
}

const Contact: React.FC<ContactProps> = props => {
  return (
    <StyledLink
      href={props.href}
      color={props.color}
      _hover={{ color: 'primary.400' }}
    >
      <Box
        mx={2}
        border="1px solid"
        borderColor={props.color}
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

export const Contacts: React.FC<ContactsProps> = props => {
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
    <Flex mt={2}>
      {Object.keys(contacts).map((name: string, index: number) => (
        <Contact
          key={index}
          name={name}
          href={contacts[name].link}
          color={props.color}
        />
      ))}
    </Flex>
  );
};
