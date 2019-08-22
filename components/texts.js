//import libreries
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
//make component
const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5,    
        padding: 4,
        marginBottom: 5
      },
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'#6b6b6b'
            }
    

}) 
const Texts = (props) =>{
    return(
        <View style={Styles.container}>
        <Text style={Styles.textStyle}>{props.holdText}</Text>
        </View>
    );
};

//avalible component
export default Texts;