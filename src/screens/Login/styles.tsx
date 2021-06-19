import {StyleSheet} from 'react-native';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../styles/theme';

export const useStyles = () => {
  const theme = useTheme<Theme>();
  const localStyles = StyleSheet.create({
    safeAreaContainer: {flex: 1},
    container: {
      flex: 1,
      backgroundColor: theme.colors.mainBackground,
      padding: theme.spacing.m,
    },
  });

  return localStyles;
};
