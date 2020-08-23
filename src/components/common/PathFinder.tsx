import React, { useContext } from 'react';
import { Text, Stack, Divider } from '@chakra-ui/core';

import { LocationContext } from '../../context';
import { StyledLink } from './StyledLink';

export const PathFinder: React.FC = () => {
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
        <Divider backgroundColor="#808080" />
      </>
    );
  } else {
    return <></>;
  }
};
