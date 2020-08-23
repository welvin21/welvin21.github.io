import React, { useContext } from 'react';
import {
  Avatar,
  Flex,
  Text,
  Stack,
  Link,
  Box,
  useColorMode,
} from '@chakra-ui/core';
import { useStaticQuery, graphql } from 'gatsby';

import { Footer } from '../footer';
import { InternalLink, StyledLink, ColorModeSwitch } from '../common';
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
    <Flex direction={'row'} align={'center'} my={1}>
      <Avatar size="lg" name={name} src={`${picturePath}`} />
      <Text px={2} fontSize="xl">
        <InternalLink to="/" _hover={{}} children={name} />{' '}
        <StyledLink href={twitter.link} children={`@${twitter.name}`} />
      </Text>
    </Flex>
  );
};

const Description: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex my={1}>
      <Text color={`tertiary.${colorMode}`}>
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
    <Flex direction={['row', 'row', 'column', 'column']} my={1}>
      {menu.map(({ route, text }: Route, index: number) => (
        <InternalLink key={index} to={route} py={2} pr={2} w="fit-content">
          {location.pathname &&
          (location.pathname === route ||
            location.pathname.startsWith(`/${text.toLowerCase()}`)) ? (
            <Text as="u">
              <b>{text}</b>
            </Text>
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
      <ColorModeSwitch />
      <Description />
      <Menu siteMetadata={siteMetadata} />
      <Box display={['none', 'none', 'flex', 'flex']}>
        <Footer />
      </Box>
    </Stack>
  );
};
