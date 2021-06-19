import {createTheme} from '@shopify/restyle';

export const palette = {
  purple: '#5A31F4',
  white: '#FFF',
  black: '#111',
  darkGray: '#333',
  lightGray: '#EEE',
  textLight: '#ADADAD',
  for: '#423bcf',
  against: '#f1484b',
  lightBackground: '#FFF',
  darkBackground: '#191919',
  lightTextInputBackground: '#2A2A2A',
  darkTextInputBackground: '#2A2A2A',
  darkPlaceHolderTextInputBackground: '#828282',
  lightGreen: '#01A56D',
  errorText: '#E53934',
};

export const theme = createTheme({
  rounded: {s: 8, m: 16, l: 24, xl: 48},
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    '2xl': 40,
    '3xl': 48,
    '4xl': 56,
    textInput: 14,
  },
  colors: {
    textInputBackground: palette.lightTextInputBackground,
    mainBackground: palette.lightBackground,
    mainForeground: palette.black,
    errorText: palette.errorText,
    textColor: palette.black,
    placeholderTextColor: palette.darkGray,
    focusedTextInput: '#BDBDBD',
    buttonBackground: palette.lightGreen,
    textButton: palette.textLight,
  },
  breakpoints: {},
  textVariants: {
    heading: {
      fontSize: 32,
      color: 'textColor',
      fontWeight: 'bold',
      marginBottom: 'xl',
    },
    subheading: {
      fontSize: 24,
      color: 'textColor',
    },
    body: {
      fontSize: 16,
      color: 'textColor',
    },
    textInputLabel: {
      fontSize: 16,
      color: 'textColor',
    },
    textInput: {
      fontSize: 14,
      color: 'textColor',
    },
    textButton: {
      fontSize: 14,
      color: 'textButton',
    },
    helperText: {
      fontSize: 12,
      color: 'textColor',
    },
    errorHelperText: {
      fontSize: 12,
      color: 'errorText',
    },
  },
});

export type Theme = typeof theme;
