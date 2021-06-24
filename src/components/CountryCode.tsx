/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();

import {useTheme} from '@shopify/restyle';
import CountryPicker, {
  DARK_THEME,
  Country,
} from 'react-native-country-picker-modal';

import {Theme} from '../styles/theme';
import {Text} from './../components';
import {defaultCountry} from '../config';

type CountryCodeProps = {
  onChange?: (countryCode: string) => void;
};

const CountryCode = (props: CountryCodeProps) => {
  const theme = useTheme<Theme>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [country, setCountry] = useState<Partial<Country>>(defaultCountry);

  useEffect(() => {
    if (country && country.callingCode && props.onChange) {
      props?.onChange(country.callingCode[0]);
    }
  }, [country, props]);

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalOpen(modelOpen => !modelOpen)}
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          width: '20%',
          backgroundColor: theme.colors.textInputBackground,
          borderRadius: theme.rounded.s,
          borderColor: theme.colors.textInputBackground,
          borderWidth: 1,
          marginRight: theme.spacing.s,
          paddingVertical: theme.spacing.m,
          paddingHorizontal: theme.spacing.s,
        }}>
        <Text style={{color: theme.colors.textColor, marginRight: 5}}>
          +{country && country.callingCode ? country?.callingCode[0] : ''}
        </Text>
        <Ionicons
          color={theme.colors.textColor}
          name="caret-down-outline"
          size={15}
        />
      </TouchableOpacity>
      <CountryPicker
        theme={DARK_THEME}
        visible={isModalOpen}
        withFlagButton={false}
        withFilter={true}
        withAlphaFilter={false}
        countryCode="IN"
        onClose={() => setModalOpen(false)}
        onSelect={setCountry}
      />
    </>
  );
};

export default CountryCode;
