import React from 'react';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  useColorMode,
} from '@chakra-ui/core';

type InternalLinkProps = GatsbyLinkProps<{}> & ChakraLinkProps;

export const InternalLink: React.FC<InternalLinkProps> = (
  props: InternalLinkProps
) => {
  const { colorMode } = useColorMode();

  return (
    <ChakraLink
      as={GatsbyLink as any}
      {...props}
      _hover={{
        color: props._hover ? props._hover.color : `primary.${colorMode}.400`,
        textDecoration: 'underline',
      }}
    />
  );
};
