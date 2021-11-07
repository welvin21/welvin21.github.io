import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

import { ICONS as customIcons } from '../../constants';

// const { colors, icons } = extendTheme;
// const { facebook, green, purple } = colors;

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    primary: {
      light: '#416BAD',
      dark: '#837BC6',
    },
    secondary: {
      light: '#38A169',
      dark: '#38A169',
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
  breakpoints,
  icons: {
    ...customIcons,
  },
});

export default theme;
