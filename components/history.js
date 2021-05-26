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

i = 5;
wattList = [];

buttonPress = () =>{
    this.wattList.push(this.i);
    this.i = this.i+1
    let renderListNew = this.wattList.map((watt)=>
    <View key={watt.toString()}><TouchableOpacity title = "add" disabled={true} style = {styles.button}><View style={styles.text}><Text >{watt}</Text></View></TouchableOpacity></View>
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
    {this.state.renderList}
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
  text:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  button:{
    backgroundColor:'#FFAAAA',
    height:50,
    width:'100%',
  },
  input : {  
    height:50,
    width:'50%', 
    backgroundColor:'#FFFFFF'
  }
});