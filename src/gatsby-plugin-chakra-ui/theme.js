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
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  },
  breakpoints: ['30em', '48em', '62em', '80em'],
  icons: {
    ...icons,
    ...customIcons,
  },
};
