//import libreries
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
//make component
const Styles = StyleSheet.create({
    container: {
        
        borderBottomColor: '#828682',
        backgroundColor:'#828682',
        borderBottomWidth: 5,                  
        justifyContent: 'center',
        alignItems: 'center',            
        padding: 15,
        elevation: 2,
        position: 'relative'
        
      },
    textStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        color: "#fff"
            },
    Img:{
        position:'relative',
        height:30,
        width:30
    }
    

}) 
const Header = (props) =>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.textStyle}>MC{props.headerText} <Image style={Styles.Img} source={ require('../images/edit.png')} /></Text>
           
        </View>
    );
};

//avalible component
export default Header;