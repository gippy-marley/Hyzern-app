import {palette, Theme, theme} from './theme';

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.darkBackground,
    mainForeground: palette.black,
    textColor: palette.white,
    placeholderTextColor: palette.darkPlaceHolderTextInputBackground,
    textInputBackground: palette.darkTextInputBackground,
  },
};
