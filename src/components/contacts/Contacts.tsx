import React, { useContext } from 'react';
import { Flex, Icon, Box, useColorMode } from '@chakra-ui/core';

import { StyledLink } from '../common';
import { SiteMetadataContext } from '../../context';

interface ContactsProps {
  color: string;
}

interface ContactProps {
  href: string;
  name: string;
  color: string;
}

const Contact: React.FC<ContactProps> = props => {
  const { colorMode } = useColorMode();

  return (
    <StyledLink
      href={props.href}
      color={props.color}
      _hover={{ color: `primary.${colorMode}.400` }}
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
    author: { contacts },
  } = useContext(SiteMetadataContext);

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
