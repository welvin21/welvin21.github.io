import React from 'react';
import { Link } from '@chakra-ui/core';

export const StyledLink: React.FC<{
  children: React.ReactNode | string;
  href: string;
}> = ({ children, href }) => (
  <Link
    href={href}
    color="primary.400"
    _hover={{ color: 'secondary.600' }}
    isExternal={true}
  >
    {children}
  </Link>
);
