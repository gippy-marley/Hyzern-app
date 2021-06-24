/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput as RNTextInput, View} from 'react-native';
import {Box, Text} from './index';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../styles/theme';

type Props = React.ComponentProps<typeof RNTextInput> & {
  label?: string;
  textInputStyle?: typeof RNTextInput | {};
  containerStyle?: typeof View | {};
  helperText?: string;
  hasErrors?: boolean;
};

const defaultOptions = {
  label: '',
  textInputStyle: {},
  containerStyle: {},
  helperText: '',
  hasErrors: false,
};

const TextField = React.forwardRef<RNTextInput, Props>(
  (props = defaultOptions, ref) => {
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
      <Box
        style={[{marginBottom: theme.spacing.textInput}, props.containerStyle]}>
        <Text variant="textInputLabel" marginBottom="s">
          {props.label}
        </Text>
        <RNTextInput
          ref={ref}
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
            props.textInputStyle,
          ]}
          placeholderTextColor={theme.colors.placeholderTextColor}
          onBlur={event => {
            setIsFocused(false);
            props.onBlur?.(event);
          }}
          onFocus={event => {
            setIsFocused(true);
            props.onFocus?.(event);
          }}
          {...props}
        />
        {props.hasErrors ? (
          <Text variant="errorHelperText">{props.helperText}</Text>
        ) : (
          <Text variant="helperText">{props.helperText}</Text>
        )}
      </Box>
    );
  },
);

export default TextField;
