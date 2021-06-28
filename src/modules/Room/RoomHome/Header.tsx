import React, { useState } from 'react';
import {Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = () =>{
  const [modalVisibility,setmodalVisibility] = useState(false)
  const pressHandler = ()=>{
    setmodalVisibility(true)
  }
  const modalClose = ()=>{
setmodalVisibility(false)
  }
  
      
  return(
    <View style={styles.container}>
      <Modal transparent 
      visible= {modalVisibility}
      animationType= {'fade'}
      onRequestClose={()=>modalClose()}>        
        <View style={styles.modal}>
          <Text style={styles.modaltext}>Profile</Text>
          <Text style={styles.modaltext}>My account</Text>
        </View>
      </Modal>
    <Text style={styles.logo}>HYZERN</Text>
    <TouchableOpacity onPress={()=> pressHandler()} >
    <Image source={{uri: 'https://e7.pngegg.com/pngimages/393/995/png-clipart-aspria-fitness-computer-icons-user-my-account-icon-miscellaneous-monochrome-thumbnail.png'}}
    style={styles.avatar}></Image>
    </TouchableOpacity>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor: 'black',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    height: 80
  },
  logo:{
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  },
  avatar:{
    height:22,
    width:22,
    borderRadius:50,
    marginRight: 30
  },
  modal:{
    backgroundColor: 'white',
    borderRadius: 5,
    width: 130,
    height: 100,
    position: 'relative',
    left:200,
    top: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
   elevation: 20
  },
  modaltext:{
    fontSize: 17,
    padding:10
  }

})

export default Header;