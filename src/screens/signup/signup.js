import React, {useState} from "react";
import useSignup from "./useSignup";
import {Alert,Text, View, TouchableOpacity, TextInput } from "react-native";
function signup(props){const { user, updateUser, signupHandle } = useSignup(props);
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:30,color:"white"}}>SIGN UP</Text>
<TextInput style={{backgroundColor:"white"}} value={user.name} placeholderTextColor="white" placeholder="Name:" onChangeText={text=>updateUser("name",text)}/>
<TextInput style={{backgroundColor:"white"}} value={user.email} placeholderTextColor="white" placeholder="Email:" onChangeText={text=>updateUser("email",text)} keyboardType="email-address" autoCapitalize="none"/>
<TextInput style={{backgroundColor:"white"}} value={user.password} placeholderTextColor="white" placeholder="Password:" onChangeText={text=>updateUser("password",text)} autoCapitalize="none" secureTextEntry/>
<TextInput style={{backgroundColor:"white"}} value={user.cnfPassword} placeholderTextColor="white" placeholder="Confirm Password:" onChangeText={text=>updateUser("cnfPassword",text)} autoCapitalize="none" secureTextEntry/>
<TouchableOpacity onPress={()=>{if(user.name==""){console.log("You must provide your name")}
else if(user.password===user.cnfPassword){signupHandle}
else{console.log("The passwords don't match!")}}}><Text style={{color:"white"}}>Sign Up</Text></TouchableOpacity>
<Text style={{fontSize:40,color:"white" }}>MIDNIGHT</Text></View>);}
export default signup;