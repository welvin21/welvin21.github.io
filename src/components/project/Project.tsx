import React, { FunctionComponent } from 'react';
import { Box, Heading, Text, Flex, useColorMode } from '@chakra-ui/core';

import { truncateText } from '../../utils';
import { IProject } from '../../types';
import { InternalLink, StyledLink } from '../common/';

export const Project: FunctionComponent<IProject> = ({
  path,
  title,
  excerpt,
  date,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box mb={4}>
      <StyledLink href={path} isExternal={false}>
        <Heading size="md">{title}</Heading>
      </StyledLink>
      <Text fontSize="md" color={`text.${colorMode}`}>
        {truncateText(excerpt)}
      </Text>
      <Text fontSize="sm" color={`text.${colorMode}`} my={1}>
        {date}
      </Text>
    </Box>
  );
};
