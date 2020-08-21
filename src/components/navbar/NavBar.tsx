import React, { useContext } from 'react';
import { Avatar, Flex, Text, Stack, Link } from '@chakra-ui/core';

import { InternalLink, StyledLink } from '../common';
import { routes, Route } from './routes';
import { LocationContext } from '../../context';

const PersonalInformation: React.FC = () => {
  return (
    <Flex
      direction={['row', 'row', 'column', 'column']}
      align={['center', 'center', 'start', 'start']}
    >
      <Avatar
        size="lg"
        name="Welvin Bun"
        src={require('../../assets/welvin.png')}
      />
      <Stack isInline p={2} px={[2, 2, 0, 0]}>
        <InternalLink to="/" _hover={{}}>
          <Text fontSize="xl">Welvin Bun</Text>
        </InternalLink>
        <StyledLink href="https://twitter.com/welvin21">
          <Text fontSize="xl">@welvin21</Text>
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
        . CS '22{' '}
        <StyledLink href="https://www.hku.hk">
          @The University of Hong Kong
        </StyledLink>
        . Incoming exchange student{' '}
        <StyledLink href="https://utoronto.ca">@UofT</StyledLink>.
      </Text>
    </Flex>
  );
};

const Routes: React.FC = () => {
  const location = useContext(LocationContext);

  return (
    <Flex direction={['row', 'row', 'column', 'column']}>
      {routes.map(({ route, text }: Route, index) => (
        <InternalLink key={index} to={route} py={2} pr={2} w="fit-content">
          {location.pathname === route ? <Text as="b">{text}</Text> : text}
        </InternalLink>
      ))}
    </Flex>
  );
};

export const NavBar: React.FC = () => {
  return (
    <Stack>
      <PersonalInformation />
      <Description />
      <Routes />
    </Stack>
  );
};
