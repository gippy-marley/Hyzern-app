import React, {Component} from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Box, TextField, TextButton } from '../../../../components';
import { Alert } from 'react-native';
import { Keyboard } from 'react-native';
import { Platform } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

type props ={
  toggleModal: ()=> void;
  modalVisible: any;
};

export default class AddTopic extends Component {
    constructor(props:any){
      super(props);
      this.modalVisible;
      this.toggleModal={};
    }

    //  UNSAFE_componentWillMount(){
    //   this.keyboardDidShowListener = Keyboard.addListener(
    //     'keyboardDidShow',
    //     this._keyboardDidShow,
    //   );
    //    this.keyboardDidHideListener = Keyboard.addListener(
    //     'keyboardDidHide',
    //     this._keyboardDidHide,
    //   );
    // }
    // componentWillUnmount(){
    //   this.keyboardDidShowListener.remove();
    //   this.keyboardDidHideListener.remove();
    // }

    // _keyboardDidShow=()=>{
      
    //   scrollView.scrollTo({y:220, animated:true});
      
    // };

    // _keyboardDidHide=()=>{
     
    // };

    render(){
  return(
        // <KeyboardAvoidingView style={{flex:1}}
        // behavior={Platform.OS==='ios'?'padding':''}>
        //   <ScrollView
        //   ref={(ref:any) => ( scrollView = ref )} contentContainerStyle={{flex:1}} bounces={false}>
        <KeyboardAwareScrollView innerRef={(ref) => {this.scroll = ref}}>      
        <Modal isVisible={ this.props.modalVisible } swipeDirection="down" onSwipeComplete ={()=> this.props.toggleModal()}
        onBackButtonPress={()=> this.props.toggleModal()} style={{margin: 0, padding: 0}}>
          <Box style={{marginTop:150, width: '100%', height:'100%', margin: 0,
          borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: 10}}
          backgroundColor={'mainBackground'}>     
            <TextField onFocus={(event:any)=>{this._scrollToInput(React.findNodeHandle(event.target))}} margin={40} height={110} textAlignVertical={'top'} borderColor={null} placeholder="Topic Name"></TextField>
              <Box flexDirection={'row'} justifyContent={'space-between'} style={{marginHorizontal: 50}}>
                <TextButton label="For" style={[styles.textButton, {backgroundColor: '#423bcf'}]} ></TextButton>
                <TextButton label="Against" style={[styles.textButton, {backgroundColor: '#f1484b'}]}></TextButton>
              </Box>
            <TextButton label="Let's do it!" style={[styles.textButton,
              {backgroundColor: '#01A56D', width: 150, alignSelf: 'center', marginTop: 200}]}
              onPress={()=> Alert.alert('hi')}></TextButton>
          </Box>                
        </Modal>
        {/* </ScrollView>
        </KeyboardAvoidingView> */}
        </KeyboardAwareScrollView>
  )
  }
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