import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import { RootStackParamList } from '../../../routes/RoomStackParamList';

type RoomHomeProps ={
    cont: any
};

type RoomProp = StackNavigationProp<RootStackParamList,'RoomScreen'>;

const Main = (props: RoomHomeProps) =>{
  const {cont } = props;
  const navigation = useNavigation<RoomProp>();
  return(
    <View >  
      {cont.map((x:any)=>{
        return(
        <View key={x.id} style={{marginBottom: 40}}>    
         <TouchableOpacity onPress={ ()=> {navigation.navigate('RoomScreen', {id: x.id})}} >  
        <View style={styles.flex}>
        <ImageBackground style={styles.imagefor} source={{uri: x.imagefor}}>
        <Text style={{marginTop: 175,
        marginLeft: 10, color: 'white',  fontSize: 11}}>For</Text>

        </ImageBackground>
        <ImageBackground style={styles.imagefor} source={{uri: x.imageagainst}}>
        <Text style={{marginTop: 175,
        marginLeft: 120, color: 'white', fontSize: 11}}>Against</Text>
          
        </ImageBackground>
        </View>
        <View style={styles.progressbar}>
          <Text></Text>
        </View>
        <View>          
          <View style={styles.flex}>
          <Image source={{uri: x.avatar}}
          style={styles.avatar} resizeMode='cover'></Image>        
          <Text style={styles.text}>{x.topic}</Text>
          </View>        
        <Text style={styles.textsmall}>{x.name} - {x.views}</Text>
        </View>      
        </TouchableOpacity>
        </View> ) 
      })}      
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor: '#1b1b1b',
    marginTop:0,
  },
  flex:{
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagefor:{
    marginTop: 5,
    width: 180,
    height:200
  },
  text:{
    fontSize: 15,
    color: 'white',
  },
  textsmall:{
    fontSize: 10,
    color: 'gray',
    paddingLeft: 52,
    marginTop: -15
  },
  avatar:{
    marginHorizontal: 10,
    height:30,
    width:30,
    borderRadius:50
  },
  progressbar:{
    marginTop: -15,
    height: 5,
    backgroundColor: '#423bcf',
    elevation: 50,
    shadowOpacity: 1,
    shadowColor: 'black'
},

  
})

export default Main;