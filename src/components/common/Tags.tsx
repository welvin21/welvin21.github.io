import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/core';

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box children={children} border="1px solid" p={1} mx={1} borderRadius={2} />
  );
};

export const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return tags.length ? (
    <Flex my={2} wrap="wrap" align="center" style={{ rowGap: 10 }}>
      <Text as="b" fontSize="md">
        Tags:{' '}
      </Text>
      {tags.map((tag: string, index: number) => (
        <Tag
          key={index}
          children={
            <Text fontSize={['xs', 'xs', 'sm', 'sm']}>{tag.toUpperCase()}</Text>
          }
        />
      ))}
    </Flex>
  ) : (
    <></>
  );
};
