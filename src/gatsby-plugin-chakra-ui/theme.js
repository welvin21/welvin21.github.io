import { theme } from '@chakra-ui/core';

const { colors } = theme;
const { facebook, green } = colors;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: facebook,
    secondary: green,
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
};
