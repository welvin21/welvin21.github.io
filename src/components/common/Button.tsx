import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  useColorMode,
} from '@chakra-ui/core';

export const Button: React.FC<ChakraButtonProps> = (
  props: ChakraButtonProps
) => {
  const { colorMode } = useColorMode();

  return <ChakraButton {...props} variantColor={`primary.${colorMode}`} />;
};
