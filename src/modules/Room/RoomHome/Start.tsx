import { useState } from 'react';
import AddTopic from './AddTopic';
import React, {Component} from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { ButtonAlt, Box, TextField, TextButton } from '../../../components';
import { Platform } from 'react-native';
const Start = () =>{

  const [modalVisible,setModalVisible]= useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return(
    <Box marginHorizontal={'3xl'} bottom={200}>
      <ButtonAlt label="Start a talk" textAlign="center" onPress={ ()=> toggleModal()} />
      <AddTopic toggleModal={toggleModal} modalVisible={modalVisible}></AddTopic>
{/*          
      <Modal isVisible={ modalVisible } swipeDirection="down" onSwipeComplete ={()=> toggleModal()}
      onBackButtonPress={()=> toggleModal()} style={{margin: 0, padding: 0}}>
         <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""} style={{flex:1,  margin:0, height:'50%'}}>
        <ScrollView >  
        <Box style={{marginTop: 100, width: '100%', height:'100%', bottom: 10, marginBottom: 70,
        borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: 10}}
        backgroundColor={'mainBackground'}>     
          <TextField margin={40} height={110} textAlignVertical={'top'} borderColor={'transparent'} placeholder="Topic Name"></TextField>
            <Box flexDirection={'row'} justifyContent={'space-between'} style={{marginHorizontal: 50}}>
              <TextButton label="For" style={[styles.textButton, {backgroundColor: '#423bcf'}]} ></TextButton>
              <TextButton label="Against" style={[styles.textButton, {backgroundColor: '#f1484b'}]}></TextButton>
            </Box>
          <TextButton label="Let's do it!" style={[styles.textButton, {backgroundColor: '#01A56D', width: 150, alignSelf: 'center', marginTop: 200}]} ></TextButton>
        </Box>               
        </ScrollView>
      </KeyboardAvoidingView> 
      </Modal> */}
      
    </Box>
  )
}

const styles= StyleSheet.create({
  textButton:{
  width: 100,
  fontSize: 15,
  color: 'white',
  height:45,
  borderRadius: 30,
  textAlignVertical: "center",
  textAlign: 'center'
  }
})

export default Start;