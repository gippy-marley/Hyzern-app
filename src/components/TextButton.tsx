import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from './index';

type TextButtonProps = {
  label?: string;
  textAlign?: string;
  onPress?: () => void;
};

const TextButton = (props: TextButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text variant="textButton" {...props}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
