import { theme } from '@chakra-ui/core';

import { ICONS as customIcons } from '../constants';

const { colors, icons } = theme;
const { facebook, green } = colors;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: facebook,
    secondary: green,
    tertiary: {
      light: '#B3B3B3',
      dark: '#FFF',
    },
    text: {
      light: '#000',
      dark: '#FFF',
    },
    background: {
      light: '#FFF',
      dark: '#0D0D0D',
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  icons: {
    ...icons,
    ...customIcons,
  },
};
