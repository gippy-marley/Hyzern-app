import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Text} from './index';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../styles/theme';

type TextButtonProps = {label?: string; textAlign?: string; onPress?: any};

const TextButton = (props: TextButtonProps) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Box
        style={{
          elevation: 5,
          paddingHorizontal: theme.spacing.l,
          backgroundColor: theme.colors.buttonBackground,
          borderRadius: theme.rounded.xl,
          width: 180,
          height: 50,
          // marginBottom: 100,
          alignSelf: 'center',
          justifyContent: 'center'
        }}>
        <Text textAlign="center" variant="body">
          {props.label}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default TextButton;
