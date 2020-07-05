import React, {useCallback,useState} from "react";
import useSignup from "./useSignup";
import {Text, View, TouchableOpacity, TextInput } from "react-native";
function signup(props){const {err,setErr,user, updateUser, signupHandle } = useSignup(props);
const [show,setShow]=useState(true)
const toggleType=useCallback(()=>{if(user.type=="Cook"){updateUser("type","User")}
else{updateUser("type","Cook")}},[])
const toggle=useCallback(()=>{if(show){setShow(false)}
else{setShow(true)}},[])
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
<Text style={{color:"red",fontSize:30}}>SIGN UP</Text>
<Text style={{color:"red"}}>{err}</Text>
<TextInput style={{backgroundColor:"white",color:"red"}} value={user.name} placeholderTextColor="red" placeholder="Username:" onChangeText={text=>updateUser("name",text)}/>
<Text style={{color:"red"}}>Note this is not your real name, but your username that will be displayed to other users</Text>
<TextInput style={{backgroundColor:"white",color:"red"}} value={user.realName} placeholderTextColor="red" placeholder="Real name:" onChangeText={text=>updateUser("realName",text)}/>
<TouchableOpacity onPress={toggleType}><Text style={{color:"red"}}>Type of Account: {user.type}</Text></TouchableOpacity>
<TextInput style={{backgroundColor:"white",color:"red"}} value={user.email} placeholderTextColor="red" placeholder="Email:" onChangeText={text=>updateUser("email",text)} keyboardType="email-address" autoCapitalize="none"/>
<TextInput style={{backgroundColor:"white",color:"red"}} value={user.password} placeholderTextColor="red" placeholder="Password:" onChangeText={text=>updateUser("password",text)} autoCapitalize="none" secureTextEntry={show}/>
<TextInput style={{backgroundColor:"white",color:"red"}} value={user.cnfPassword} placeholderTextColor="red" placeholder="Confirm Password:" onChangeText={text=>updateUser("cnfPassword",text)} autoCapitalize="none" secureTextEntry={show}/>
<TouchableOpacity onPress={toggle}><Text style={{color:"red"}}>Show/hide password fields</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{if(user.name==""){setErr("You must provide your name")}
else if(user.password===user.cnfPassword){signupHandle()}
else{setErr("The passwords don't match!")}}}><Text style={{color:"red"}}>Sign Up</Text></TouchableOpacity>
<Text style={{fontSize:40,color:"red"}}>FoodGate</Text></View>);}
export default signup;