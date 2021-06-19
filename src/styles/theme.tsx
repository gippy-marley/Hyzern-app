import {createBox, createText, createTheme} from '@shopify/restyle';

export const palette = {
  purple: '#5A31F4',
  white: '#FFF',
  black: '#111',
  darkGray: '#333',
  lightGray: '#EEE',
  for: '#423bcf',
  against: '#f1484b',
  lightBackground: '#FFF',
  darkBackground: '#191919',
};

export const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 48,
  },
  colors: {
    mainBackground: palette.lightBackground,
    mainForeground: palette.black,
    textColor: palette.black,
  },
  breakpoints: {},
  textVariants: {
    heading: {
      fontSize: 32,
      color: 'textColor',
    },
    subheading: {
      fontSize: 24,
      color: 'textColor',
    },
    body: {
      fontSize: 18,
      color: 'textColor',
    },
  },
  cardVariants: {
    primary: {
      backgroundColor: 'primaryCardBackground',
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: 'secondaryCardBackground',
      shadowOpacity: 0.1,
    },
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
