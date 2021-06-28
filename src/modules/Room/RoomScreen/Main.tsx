import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import data from '../../../../data';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/RoomStackParamList';

type RoomScreenProps ={
    cont: any;
};

type RoomScreenRouteProp= RouteProp<RootStackParamList, 'RoomScreen'>;

const Main = (props: RoomScreenProps) =>{
    const { cont }=data;
   
    const route = useRoute<RoomScreenRouteProp>();
  
   const num = route.params.id;

  return(
    <ScrollView>
    
    {cont.filter((y)=>y.id===num).map((x:any)=>{
          return(
            <View key={x.id} style={{backgroundColor: 'black'}}>
            <Text style={styles.topic}>{x.topic}</Text>
            <View style={styles.votes}>
            <Text style={styles.votescount}>{x.votefor}</Text>
            <Text style={styles.votescount}>{x.voteagainst}</Text>
            </View>            
            <View style={styles.progressbar}>
                <Text></Text>
            </View>
            <ImageBackground style={styles.image} source={{uri:x.imagefor}} >
                <Text style={styles.labelfor}>For</Text>

            </ImageBackground>
            <ImageBackground style={styles.image} source={{uri:x.imageagainst}} >
            <Text style={styles.labelagainst}>Against</Text>

            </ImageBackground>
            </View>)        
    })}
    </ScrollView>
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
        height: 280
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
    }   

})

export default Main;