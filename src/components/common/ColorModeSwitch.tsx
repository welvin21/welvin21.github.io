import React from 'react';
import { IconButton, PseudoBox, useColorMode } from '@chakra-ui/core';

export const ColorModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <PseudoBox my={1}>
      <IconButton
        w="100%"
        size="sm"
        variantColor={'gray'}
        aria-label="color mode"
        variant="outline"
        icon={colorMode === 'dark' ? 'sun' : 'moon'}
        onClick={toggleColorMode}
      />
    </PseudoBox>
  );
};
