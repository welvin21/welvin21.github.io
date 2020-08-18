import { theme } from '@chakra-ui/core';

const { colors } = theme;
const { twitter } = colors;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: twitter,
    text: {
      primary: '#000',
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
};
