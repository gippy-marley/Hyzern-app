import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {Box, Text} from './index';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../styles/theme';

<<<<<<< HEAD
type TextButtonProps = {label?: string; textAlign?: string; onPress?: any};
=======
type TextButtonProps = {
  label?: string;
  textAlign?: string;
  isLoading?: boolean;
  onPress?: () => void;
};
>>>>>>> a3a0858c43794b75b365fcd4f336f16593b16b6e

const TextButton = (props: TextButtonProps) => {
  const theme = useTheme<Theme>();

  return (
<<<<<<< HEAD
    <TouchableOpacity onPress={props.onPress}>
=======
    <TouchableOpacity
      onPress={() => {
        !props?.onPress || props.onPress();
      }}>
>>>>>>> a3a0858c43794b75b365fcd4f336f16593b16b6e
      <Box
        style={{
          paddingHorizontal: theme.spacing.m,
          paddingVertical: theme.spacing.m,
          backgroundColor: theme.colors.buttonBackground,
          borderRadius: theme.rounded.m,
        }}>
        {props.isLoading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <Text textAlign="center" fontWeight={'bold'} variant="body">
            {props.label}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default TextButton;
