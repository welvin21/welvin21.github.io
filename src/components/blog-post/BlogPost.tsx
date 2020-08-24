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

  return (
    <Box mb={4}>
      <StyledLink href={path} isExternal={false}>
        <Heading size="md">{title}</Heading>
        <Text fontSize="md" color={`text.${colorMode}`}>
          {truncateText({ text: excerpt, limit: 250 })}
        </Text>
      </StyledLink>
      <Text fontSize="sm" as="b" color={`text.${colorMode}`}>
        {date.toUpperCase()} | {tags[0].toUpperCase()}
      </Text>
    </Box>
  );
};
