import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {    
        backgroundColor: '#000',   
        justifyContent: 'center',
        alignItems: 'center',            
        padding: 30,
        bottom: 15
      }
    

}) 
class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
    <View style ={Styles.container}>
        <View style={{
        top: 10,
        backgroundColor: this.state.text,
        backgroundColor: '#fff',
        borderBottomColor: '#000000',
        borderWidth: 2,
        height:40,
        borderRadius: 5, 
        width: 300,
        bottom: 40 }}>
       <UselessTextInput
         multiline = {true}
         numberOfLines = {4}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
     </View>
    </View>
     
    );
  }
}

