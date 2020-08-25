import React from 'react';
import {
  Text,
  Heading,
  Link,
  ListItem,
  Image,
  Box,
  Code,
} from '@chakra-ui/core';
import { MDXProviderComponentsProp } from '@mdx-js/react';

import { StyledLink } from '../components/';

export const MDXProviderComponents = (): MDXProviderComponentsProp => {
  return {
    p: props => <Text mb={4} {...props} />,
    h1: props => <Heading my={4} as={`h1`} size="2xl" {...props} />,
    h2: props => <Heading my={4} as={`h2`} size="xl" {...props} />,
    h3: props => <Heading my={4} as={`h3`} size="lg" {...props} />,
    h4: props => <Heading my={4} as={`h4`} size="md" {...props} />,
    h5: props => <Heading my={4} as={`h5`} size="sm" {...props} />,
    h6: props => <Heading my={4} as={`h6`} size="xs" {...props} />,
    a: props => <StyledLink {...props} />,
    ul: props => <Box as="ul" mb={4} ml={8} {...props} />,
    li: props => <ListItem mb={1} {...props} />,
    img: props => <Box as="img" {...props} />,
    center: (props: { children: React.ReactNode }) => (
      <Box textAlign="center" mb={4}>
        <Text as="i" {...props} />
      </Box>
    ),
    code: props => (
      <Code
        mb={4}
        w="100%"
        p={2}
        borderRadius="md"
        style={{ overflowX: 'scroll' }}
        {...props}
      />
    ),
  };
};
