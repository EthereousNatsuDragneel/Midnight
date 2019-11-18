import React, { Component } from "react";
import {TouchableOpacity,View, Text } from "react-native";
import firebaseHandle from '../../utils/firebaseHandle'
export default class Home extends Component{
render(){return(<View style={{flex: 1,justifyContent: "center",alignItems: "center",backgroundColor: "black"}}>
<Text style={{ fontSize: 50, color: "white" }}>Logged in!</Text>
<TouchableOpacity onPress={()=>firebaseHandle.getInstance().auth().signOut()}><Text>Sign out</Text></TouchableOpacity>
</View>);}}