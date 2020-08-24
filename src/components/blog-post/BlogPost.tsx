import React, { FunctionComponent } from 'react';
import { Box, Heading, Text, Grid, Image, useColorMode } from '@chakra-ui/core';

import { truncateText } from '../../utils';
import { IBlogPost } from '../../types';
import { InternalLink, StyledLink } from '../common/';

export const BlogPost: FunctionComponent<IBlogPost> = ({
  path,
  title,
  excerpt,
  date,
  tags,
  image,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Grid
      mb={4}
      templateColumns={['', '1fr 3fr', '1fr 3fr', '1fr 3fr']}
      gap={2}
      alignItems="center"
    >
      <StyledLink href={path} isExternal={false}>
        <Box>
          <Image src={image.childImageSharp.fluid.src} />
        </Box>
      </StyledLink>
      <Box>
        <StyledLink href={path} isExternal={false}>
          <Heading size="md">{title}</Heading>
          <Text fontSize="md" color={`text.${colorMode}`}>
            {truncateText({ text: excerpt, limit: 200 })}
          </Text>
        </StyledLink>
        <Text fontSize="sm" as="b" color={`text.${colorMode}`} my={1}>
          {date.toUpperCase()} | {tags[0].toUpperCase()}
        </Text>
      </Box>
    </Grid>
  );
};
