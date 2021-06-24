/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Text} from './../components';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../styles/theme';

const CountryCode: React.FC = ({}) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        width: '20%',
        backgroundColor: theme.colors.textInputBackground,
        borderRadius: theme.rounded.s,
        borderColor: theme.colors.textInputBackground,
        borderWidth: 1,
        marginRight: theme.spacing.s,
        paddingVertical: theme.spacing.m,
        paddingHorizontal: theme.spacing.s,
      }}>
      <Text style={{color: theme.colors.textColor, marginRight: 5}}>+91</Text>
      <Ionicons
        color={theme.colors.textColor}
        name="caret-down-outline"
        size={15}
      />
    </TouchableOpacity>
  );
};

export default CountryCode;
