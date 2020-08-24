import React, { useContext } from 'react';
import { Text, Box, useColorMode } from '@chakra-ui/core';

import { LocationContext } from '../../context';
import { StyledLink } from './StyledLink';

export const PathFinder: React.FC = () => {
  const { colorMode } = useColorMode();

  const { pathname } = useContext(LocationContext);
  const trimmedPathname: string = pathname.replace(/^\/+|\/+$/g, '');
  const paths: string[] = trimmedPathname.split('/');

  if (trimmedPathname && paths.length) {
    return (
      <Box
        borderBottom="1px solid"
        borderColor={`tertiary.${colorMode}`}
        mb={2}
        pb={2}
      >
        <Text>
          {paths.map((path, index) => (
            <Box key={index} as="span">
              <StyledLink
                key={index}
                href={`/${path}`}
                isExternal={false}
                children={path}
              />
              {index === paths.length - 1 ? '' : ' > '}
            </Box>
          ))}
        </Text>
      </Box>
    );
  } else {
    return <></>;
  }
};
