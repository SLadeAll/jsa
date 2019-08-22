import React from 'react';
import {ScrollView, View, StyleSheet, Text, Button,Image } from 'react-native';
import Header from './header';
import UselessTextInput from './textBox';
import Texts from './texts';

const Styles = StyleSheet.create({
  container: {
      padding:20,
      borderColor: '#000',
      backgroundColor: '#000',
      borderBottomWidth: 5,                  
      position: 'relative',
      height:800,
      alignContent:"center",
    },
  photo: {
    marginTop: 10,
    borderColor:'#000',
    
    backgroundColor: '#000',
    borderRadius: 100,
    borderColor: '#000',
    width: 200,
    height:200,
    position: "relative",
  },
  text: {
    margin:35,
    color: "blue"
  },
  container2: {
    
    backgroundColor: '#fff',
    borderWidth: 5,                  
    position: 'relative',
    alignContent:"center",
    borderRadius: 20,
    justifyContent: 'center',
        alignItems: 'center',
    padding:20
  },
  buttOn:{
    margin:20,
    width: 200,
  }
 
}) 

const Perfil = () =>{
  
    return (
      <ScrollView>
        <Header headerText=" Grizzley" />
        <View style={Styles.container} >
          
          <View style={Styles.container2}>
            <View >
                  <Image source={ require('../images/c2.png')}style={Styles.photo}/>
            </View>
            <Texts holdText="Edad: 16" />
            <Texts holdText="Punch: 80" />
            <Texts holdText="Flow: 75" />
            <Texts holdText="Skills: 85" />
            <View style={Styles.buttOn} >
              <Button 
                onPress={() => {
                  alert('You tapped the button!');
                 }}
                title="Press Me"
                color="#841584"
                    />
            </View>
            
          </View>
        </View>
      </ScrollView>
      
    );
}

export default Perfil;