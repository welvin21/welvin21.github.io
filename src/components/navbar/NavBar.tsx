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
import { LocationContext, SiteMetadataContext } from '../../context';
import { Route } from '../../types';

export const PersonalInformation: React.FC = () => {
  const {
    author: {
      name,
      picturePath,
      contacts: { twitter },
    },
  } = useContext(SiteMetadataContext);

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

export const Description: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex my={1}>
      <Text color={`tertiary.${colorMode}`}>
        Current Undergraduate Research Assistant{' '}
        <StyledLink href="http://www.visionlab.cs.hku.hk/">
          @HKUCV Lab
        </StyledLink>
        . Prev Technology Summer Analyst{' '}
        <StyledLink href="https://www.morganstanley.com/">
          @Morgan Stanley
        </StyledLink>
        , Data Science Intern{' '}
        <StyledLink href="https://societegenerale.com">
          @Societe Generale
        </StyledLink>
        , Student Ambassador{' '}
        <StyledLink href="https://studentambassadors.microsoft.com/">
          @Microsoft
        </StyledLink>
        . CS '22 <StyledLink href="https://www.hku.hk">@HKU</StyledLink>.
      </Text>
    </Flex>
  );
};

const Menu: React.FC = () => {
  const location = useContext(LocationContext);
  const { menu } = useContext(SiteMetadataContext);

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
  return (
    <Stack>
      <PersonalInformation />
      <ColorModeSwitch />
      <Description />
      <Menu />
      <Box display={['none', 'none', 'flex', 'flex']}>
        <Footer />
      </Box>
    </Stack>
  );
};
