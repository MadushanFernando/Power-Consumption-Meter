import React, { Component,useState }from 'react'

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
  TextInput,
} from 'react-native';


export default class AppHistory extends Component {
 constructor() {
   super()
   this.state = {
      watt :10,
      text :'',
      renderList : [],
   }
}

i = 1;
wattList = [];
wattamount = 10;
buttonPress = () =>{
    this.wattList.push(this.i);
    this.i = this.i+1
    let renderListNew = this.wattList.map((deviceId)=>
    <View key={deviceId.toString()}><View style={styles.smallestcontainer}></View><View style={{flexDirection:"row", width:"100%"}} ><View style={{width:'50%'}}><TouchableOpacity title = "add" disabled={true} style = {styles.deviceButton}><View style={styles.devicetext}><Text >Device {deviceId}</Text></View></TouchableOpacity></View><View style={{width:'50%'}}><View style={styles.whitetext}><Text>{this.wattamount} Watts</Text></View></View></View><View style={styles.smallestcontainer}></View></View>
    );
    this.setState({renderList:renderListNew})
    // alert(this.state.renderList)
    // return(
    //     <ul>{renderList}</ul>
    // );
}

button = <Button title = "add" onPress="buttonPress"/>
 render(){
 return(
   <View style={styles.container}>
    
    
     <Text>{this.state.text}</Text>
     <View style={{flexDirection:"row", width:"100%"}}>
     <TextInput
     style={   styles.input}
     placeholder="Type here"
     onChangeText={text=>this.setState({text:text})}
     
     /><View style={{height:50,width:"50%"}}><TouchableOpacity title = "add" onPress={this.buttonPress} style = {styles.button}><View style={styles.text}><Text >Add Device</Text></View></TouchableOpacity></View>
    </View>
    <View style={styles.smallercontainer}></View>
    {this.state.renderList}
    <View style={styles.smallcontainer}></View>
    <View><TouchableOpacity title = "add" disabled={true} style = {styles.calcbutton}><View style={styles.text}><Text >Calculate</Text></View></TouchableOpacity></View>
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
  container: {
    height:'100%',
    backgroundColor: '#9FA8DA'
  },
  smallcontainer: {
    height:'10%',
    backgroundColor: '#9FA8DA'
  },
  smallestcontainer: {
    height:'1%',
    backgroundColor: '#9FA8DA'
  },
  smallercontainer: {
    height:'3%',
    backgroundColor: '#9FA8DA'
  },
  text:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor: '#0D7CA0'
  },
  whitetext:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor: '#F7DCDF'
  },
  button:{
    backgroundColor:'#FFAAAA',
    height:50,
    width:'100%',
  },
  calcbutton:{
    
    backgroundColor:'#1FF1C4',
    height:50,
    width:'100%',
  },
  input : {  
    height:50,
    width:'50%', 
    backgroundColor:'#FFFFFF'
  },
  deviceButton:{
    backgroundColor:'#249956',
    height:50,
    width:'100%',
  },
  devicetext:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor: '#249956'
  },
});