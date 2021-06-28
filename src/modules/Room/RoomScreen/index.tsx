import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import Header from '../RoomHome/Header'
import Main from './Main';
import data from '../../../../data'
import { Box, CommentInput, TextInput } from '../../../components';



const RoomScreen = () =>{
    const { cont }=data;
  return(
    <View flex={1} backgroundColor={'buttonBackground'} >
    <Header></Header>
    <Main cont={cont} ></Main>
    <CommentInput style={{borderWidth: 1, borderRadius: 50,
      borderColor: '#ADADAD', backgroundColor: 'rgba(0,0,0,0.05)', marginHorizontal: 10,
        paddingLeft: 20, bottom: 80, height: 40 }} placeholder="comments" />
    </View>    
  )  
}

const styles=StyleSheet.create({
    topic:{
        color: 'white',
        margin: 20,
        marginTop:10,
        fontSize: 12
    },
    votes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    votescount:{
        color: 'white',
        fontSize: 10
    },
    progressbar:{
        marginBottom: 10,
        marginTop: 1,
        height: 5,
        backgroundColor: '#423bcf',
        elevation: 50,
        shadowOpacity: 1,
        shadowColor: 'black'
    },
    image:{
        width: '100%',
        height: 250
    },
    labelfor:{
        margin: 10,
        marginLeft: 13,
        backgroundColor: '#423bcf',
        width: 45,
        height: 25,
        borderRadius: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white'
    },
    labelagainst:{
        margin: 10,
        marginRight: 13,
        backgroundColor: '#f1484b',
        alignSelf: 'flex-end',
        width: 65,
        height: 25,
        borderRadius: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white'
    },
    

})

export default RoomScreen;