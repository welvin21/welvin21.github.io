import React, { useContext } from 'react';
import { Text, Stack, Box, useColorMode } from '@chakra-ui/core';

import { LocationContext } from '../../context';
import { StyledLink } from './StyledLink';

export const PathFinder: React.FC = () => {
  const { colorMode } = useColorMode();

  const { pathname } = useContext(LocationContext);
  const trimmedPathname: string = pathname.replace(/^\/+|\/+$/g, '');
  const paths: string[] = trimmedPathname.split('/');

  if (trimmedPathname && paths.length) {
    return (
      <>
        <Stack isInline>
          {paths.map((path, index) => (
            <Text key={index}>
              <StyledLink
                href={`/${path}`}
                isExternal={false}
                children={path}
              />
              {index === paths.length - 1 ? '' : ' > '}
            </Text>
          ))}
        </Stack>
        <Box h="0.01em" my={2} backgroundColor={`tertiary.${colorMode}`} />
      </>
    );
  } else {
    return <></>;
  }
};
