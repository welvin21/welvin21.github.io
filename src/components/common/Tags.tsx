import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/core';

import { InternalLink } from './InternalLink';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box children={children} border="1px solid" p={1} mx={1} borderRadius={2} />
  );
};

export const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <Flex my={2} wrap="wrap" align="center" style={{ rowGap: 10 }}>
      <Text as="b" fontSize="md">
        Tags:{' '}
      </Text>
      {tags.map((tag: string, index: number) => (
        <Tag
          key={index}
          children={
            <InternalLink to={`/tags/${tag.toLowerCase().replace(' ', '-')}`}>
              <Text fontSize={['xs', 'xs', 'sm', 'sm']}>
                {tag.toUpperCase()}
              </Text>
            </InternalLink>
          }
        />
      ))}
    </Flex>
  );
};
