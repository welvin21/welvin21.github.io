import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/core';

export const Button: React.FC<ChakraButtonProps> = (
  props: ChakraButtonProps
) => {
  return <ChakraButton {...props} variantColor="primary" />;
};
