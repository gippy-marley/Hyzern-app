import React from 'react';
import { Alert } from 'react-native';
import { ButtonAlt, Box } from '../../../components';

const Start = () =>{
  return(
    <Box flex={1} marginHorizontal={'3xl'}
    bottom={100 } >
      <ButtonAlt label="Start a talk" textAlign="center"
      onPress={()=> {Alert.alert('hi')}} />
    </Box>
  )
}

export default Start;