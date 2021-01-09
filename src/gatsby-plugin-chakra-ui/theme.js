import { theme } from '@chakra-ui/core';

import { ICONS as customIcons } from '../constants';

const { colors, icons } = theme;
const { facebook, green, purple } = colors;

export default {
  ...theme,
  colors: {
    ...colors,
    primary: {
      light: facebook,
      dark: purple,
    },
    secondary: {
      light: green,
      dark: green,
    },
    tertiary: {
      light: '#808080',
      dark: '#FFF',
    },
    text: {
      light: '#000',
      dark: '#FFF',
    },
    background: {
      light: '#FFF',
      dark: '#1A1F2D',
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  icons: {
    ...icons,
    ...customIcons,
  },
};
