import React, { FunctionComponent } from 'react';
import { Box, Heading, Text, Flex, useColorMode } from '@chakra-ui/core';

import { truncateText } from '../../utils';
import { IBlogPost } from '../../types';
import { InternalLink, StyledLink } from '../common/';

export const BlogPost: FunctionComponent<IBlogPost> = ({
  path,
  title,
  excerpt,
  date,
  tags,
}) => {
  const { colorMode } = useColorMode();
  const highlightTag = tags[0];

  return (
    <Box mb={4}>
      <StyledLink href={path} isExternal={false}>
        <Heading size="md">{title}</Heading>
      </StyledLink>
      <Text fontSize="md" color={`text.${colorMode}`}>
        {truncateText({ text: excerpt, limit: 250 })}
      </Text>
      <Text fontSize="sm" as="b" color={`text.${colorMode}`}>
        {date.toUpperCase()} {'| '}
        <StyledLink
          href={`/tags/${highlightTag.toLowerCase().replace(' ', '-')}`}
          isExternal={false}
          color={`secondary.${colorMode}.500`}
          _hover={{ color: `primary.${colorMode}.400` }}
        >
          {highlightTag.toUpperCase()}
        </StyledLink>
      </Text>
    </Box>
  );
};
