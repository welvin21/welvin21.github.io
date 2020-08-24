import React, { useContext } from 'react';
import { Text, Stack, useColorMode } from '@chakra-ui/core';

import { LocationContext } from '../../context';
import { StyledLink } from './StyledLink';

export const PathFinder: React.FC = () => {
  const { colorMode } = useColorMode();

  const { pathname } = useContext(LocationContext);
  const trimmedPathname: string = pathname.replace(/^\/+|\/+$/g, '');
  const paths: string[] = trimmedPathname.split('/');

  if (trimmedPathname && paths.length) {
    return (
      <Stack
        isInline
        borderBottom="1px solid"
        borderColor={`tertiary.${colorMode}`}
        mb={2}
        pb={2}
      >
        {paths.map((path, index) => (
          <Text key={index}>
            <StyledLink href={`/${path}`} isExternal={false} children={path} />
            {index === paths.length - 1 ? '' : ' > '}
          </Text>
        ))}
      </Stack>
    );
  } else {
    return <></>;
  }
};
