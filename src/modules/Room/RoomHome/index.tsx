import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import Header from './Header';
import Start from './Start';
import Main from './Main';
import data from '../../../../data';

const RoomModule = () =>{
   const {cont} = data;
  return(
      <View >
      <Header></Header>
      <ScrollView><Main cont={cont} /></ScrollView>
      <Start ></Start>   
      </View>
    
  )  
}

export default RoomModule;