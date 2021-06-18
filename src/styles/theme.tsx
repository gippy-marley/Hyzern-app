import {createTheming} from '@callstack/react-theme-provider';

const defaultTheme = {
  typography: {
    color: '#FFF',
    heading: {
      fontSize: 32,
      color: '#FFF',
    },
    subheading: {
      fontSize: 24,
      color: '#FFF',
    },
    body: {
      fontSize: 18,
      color: '#FFF',
    },
  },
  colors: {
    background: {
      default: '#191919',
    },
    for: {
      main: '#423bcf',
    },
    against: {
      main: '#f1484b',
    },
  },
  spacing: (x: number) => {
    return x * 10;
  },
};

const {ThemeProvider, withTheme, useTheme} = createTheming(defaultTheme);
export {ThemeProvider, withTheme, useTheme};
