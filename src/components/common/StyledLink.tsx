import React from 'react';
import { Link, LinkProps } from '@chakra-ui/core';

export const StyledLink: React.FC<LinkProps> = props => (
  <Link
    href={props.href}
    color="primary.400"
    _hover={{ color: 'secondary.500' }}
    isExternal={true}
    {...props}
  >
    {props.children}
  </Link>
);
