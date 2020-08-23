import React from 'react';
import { Link, LinkProps, useColorMode } from '@chakra-ui/core';

export const StyledLink: React.FC<LinkProps> = props => {
  const { colorMode } = useColorMode();

  return (
    <Link
      href={props.href}
      color={`primary.${colorMode}.400`}
      _hover={{ color: `secondary.${colorMode}.500` }}
      isExternal={true}
      {...props}
    >
      {props.children}
    </Link>
  );
};
