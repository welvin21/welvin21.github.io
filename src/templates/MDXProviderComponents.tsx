import React from 'react';
import {
  Text,
  Heading,
  Link,
  ListItem,
  Image,
  Box,
  Divider,
} from '@chakra-ui/core';
import { MDXProviderComponentsProp } from '@mdx-js/react';

import { StyledLink } from '../components/';

export const MDXProviderComponents = (): MDXProviderComponentsProp => {
  return {
    p: props => <Text mb={4} {...props} />,
    h1: props => <Heading mb={4} as={`h1`} size="2xl" {...props} />,
    h2: props => <Heading mb={4} as={`h2`} size="xl" {...props} />,
    h3: props => <Heading mb={4} as={`h3`} size="l" {...props} />,
    h4: props => <Heading mb={4} as={`h4`} size="md" {...props} />,
    h5: props => <Heading mb={4} as={`h5`} size="sm" {...props} />,
    h6: props => <Heading mb={4} as={`h6`} size="xs" {...props} />,
    a: props => <StyledLink {...props} />,
    ul: props => <Box as="ul" mb={4} ml={8} {...props} />,
    li: props => <ListItem mb={1} {...props} />,
    img: props => <Box as="img" {...props} />,
    center: (props: { children: React.ReactNode }) => (
      <Box textAlign="center" mb={4}>
        <Text as="i" {...props} />
      </Box>
    ),
  };
};
