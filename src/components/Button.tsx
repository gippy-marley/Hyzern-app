import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Text} from './index';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../styles/theme';

type TextButtonProps = {
  label?: string;
  textAlign?: string;
  onPress?: () => void;
};

const TextButton = (props: TextButtonProps) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Box
        style={{
          paddingHorizontal: theme.spacing.m,
          paddingVertical: theme.spacing.m,
          backgroundColor: theme.colors.buttonBackground,
          borderRadius: theme.rounded.m,
        }}>
        <Text textAlign="center" fontWeight={'bold'} variant="body">
          {props.label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default TextButton;
