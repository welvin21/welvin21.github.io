import React, { useContext } from 'react';
import { Avatar, Flex, Text, Stack, Link, Box } from '@chakra-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

import { Footer } from '../footer';
import { InternalLink, StyledLink } from '../common';
import { LocationContext } from '../../context';
import { Route } from '../../types';

const PersonalInformation: React.FC<{ siteMetadata: any }> = ({
  siteMetadata,
}) => {
  const {
    author: {
      name,
      picturePath,
      contacts: { twitter },
    },
  } = siteMetadata;

  return (
    <Flex
      direction={['row', 'row', 'column', 'column']}
      align={['center', 'center', 'start', 'start']}
    >
      <Avatar size="lg" name={name} src={`${picturePath}`} />
      <Stack isInline p={2} px={[2, 2, 0, 0]}>
        <InternalLink to="/" _hover={{}}>
          <Text fontSize="xl">{name}</Text>
        </InternalLink>
        <StyledLink href={twitter.link}>
          <Text fontSize="xl">@{twitter.name}</Text>
        </StyledLink>
      </Stack>
    </Flex>
  );
};

const Description: React.FC = () => {
  return (
    <Flex py={[4, 4, 2, 2]}>
      <Text color="#808080">
        Former Data Science Intern{' '}
        <StyledLink href="https://societegenerale.com">
          @Societe Generale
        </StyledLink>
        . Student Ambassador{' '}
        <StyledLink href="https://studentambassadors.microsoft.com/">
          @Microsoft
        </StyledLink>
        . CS '22{' '}
        <StyledLink href="https://www.hku.hk">
          @The University of Hong Kong
        </StyledLink>
        .
      </Text>
    </Flex>
  );
};

const Menu: React.FC<{ siteMetadata: any }> = ({ siteMetadata }) => {
  const location = useContext(LocationContext);
  const { menu } = siteMetadata;

  return (
    <Flex direction={['row', 'row', 'column', 'column']}>
      {menu.map(({ route, text }: Route, index: number) => (
        <InternalLink key={index} to={route} py={2} pr={2} w="fit-content">
          {location.pathname &&
          (location.pathname === route ||
            location.pathname.startsWith(`/${text.toLowerCase()}`)) ? (
            <Text as="b">{text}</Text>
          ) : (
            text
          )}
        </InternalLink>
      ))}
    </Flex>
  );
};

export const NavBar: React.FC = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
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
            menu {
              route
              text
            }
          }
        }
      }
    `
  );

  return (
    <Stack>
      <PersonalInformation siteMetadata={siteMetadata} />
      <Description />
      <Menu siteMetadata={siteMetadata} />
      <Box display={['none', 'none', 'flex', 'flex']}>
        <Footer />
      </Box>
    </Stack>
  );
};
