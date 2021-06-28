import React from 'react';
import {View} from 'react-native';
import Header from '../RoomHome/Header'
import Main from './Main';
import data from '../../../../data'
import { CommentInput } from '../../../components';



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

export default RoomScreen;