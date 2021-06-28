/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box, Text} from './index';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../styles/theme';

type TextInputProps = RNTextInputProps & {
  label: string;
  customStyle?: any;
  helperText?: string;
  hasErrors?: boolean;
};

const defaultOptions = {
  label: '',
  customStyle: {},
  helperText: '',
  hasErrors: false,
};

const CommentInput= (props: TextInputProps = defaultOptions) => {
  const theme = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = () => {
    if (props.hasErrors) {
      return theme.colors.errorText;
    }
    if (isFocused) {
      return theme.colors.focusedTextInput;
    }

    return theme.colors.textInputBackground;
  };

  return (
<Box style={{ height: 0 }} >
      <Text variant="textInputLabel" marginBottom="s">
        {props.label}
      </Text>
      <RNTextInput
        style={[
          {
            fontSize: theme.textVariants.textInput.fontSize,
            color: theme.colors.textColor,
            backgroundColor: theme.colors.textInputBackground,
            paddingVertical: theme.spacing.textInput,
            paddingHorizontal: theme.spacing.m,
            marginBottom: theme.spacing.s,
            borderRadius: theme.rounded.s,
            borderWidth: 1,
            borderColor: getBorderColor(),
          },
          props.customStyle,
        ]}
        placeholderTextColor={theme.colors.placeholderTextColor}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {props.hasErrors ? (
        <Text variant="errorHelperText">{props.helperText}</Text>
      ) : (
        <Text variant="helperText">{props.helperText}</Text>
      )}
    </Box>
  );
};

export default CommentInput;