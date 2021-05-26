/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react'
 import 'react-native-gesture-handler';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   TouchableOpacity,
 } from 'react-native';

 
export default class AppH extends Component {
  constructor() {
    super()
    this.state = {
       watt :10,
      //  add : ()=>{
      //   this.setState({watt:this.state.watt+100})
      // },
      // onPress : ()=>alert(this.state.watt),
    }
 }
  
  add = () =>{
    newWatt = this.state.watt+100;
    this.setState({watt:newWatt})
  }
  
  onPress = () =>alert(this.state.watt)
  render(){
  return(
    <View>
      <Text>{this.state.watt}</Text>
      <Button title = "add button" onPress = {this.add} />
      <Button title = "button" onPress = {this.onPress} />
    </View>
  );}
};
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 

 