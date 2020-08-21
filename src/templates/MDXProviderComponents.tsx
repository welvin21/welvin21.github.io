import React from 'react';
import { Text, Heading, Link } from '@chakra-ui/core';
import { MDXProviderComponentsProp } from '@mdx-js/react';

import { StyledLink } from '../components/';

export const MDXProviderComponents = (): MDXProviderComponentsProp => {
  return {
    p: props => <Text marginY={4} {...props} />,
    h1: props => <Heading marginB={4} as={`h1`} size="2xl" {...props} />,
    h2: props => <Heading marginB={4} as={`h2`} size="xl" {...props} />,
    h3: props => <Heading marginB={4} as={`h3`} size="l" {...props} />,
    h4: props => <Heading marginB={4} as={`h4`} size="md" {...props} />,
    h5: props => <Heading marginB={4} as={`h5`} size="sm" {...props} />,
    h6: props => <Heading marginB={4} as={`h6`} size="xs" {...props} />,
    a: props => <StyledLink {...props} />,
  };
};
