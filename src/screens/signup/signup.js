import React, {useCallback,useState} from "react";
import useSignup from "./useSignup";
import {Alert,Text, View, TouchableOpacity, TextInput } from "react-native";
function signup(props){const {err,setErr,user, updateUser, signupHandle } = useSignup(props);
const [show,setShow]=useState(true)
const toggle=useCallback(()=>{if(show){setShow(false)}
else{setShow(true)}},[])
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"navy"}}>
<Text style={{color:"yellow",fontSize:30}}>SIGN UP</Text>
<Text style={{color:"yellow"}}>{err}</Text>
<TextInput style={{backgroundColor:"navy",color:"yellow"}} value={user.name} placeholderTextColor="yellow" placeholder="Full name:" onChangeText={text=>updateUser("name",text)}/>
<TextInput style={{backgroundColor:"navy",color:"yellow"}} value={user.email} placeholderTextColor="yellow" placeholder="Email:" onChangeText={text=>updateUser("email",text)} keyboardType="email-address" autoCapitalize="none"/>
<TextInput style={{backgroundColor:"navy",color:"yellow"}} value={user.password} placeholderTextColor="yellow" placeholder="Password:" onChangeText={text=>updateUser("password",text)} autoCapitalize="none" secureTextEntry={show}/>
<TextInput style={{backgroundColor:"navy",color:"yellow"}} value={user.cnfPassword} placeholderTextColor="yellow" placeholder="Confirm Password:" onChangeText={text=>updateUser("cnfPassword",text)} autoCapitalize="none" secureTextEntry={show}/>
<TouchableOpacity onPress={toggle}><Text style={{color:"yellow"}}>Show/hide password fields</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{if(user.name==""){setErr("You must provide your name")}
else if(user.password===user.cnfPassword){signupHandle}
else{setErr("The passwords don't match!")}}}><Text style={{color:"yellow"}}>Sign Up</Text></TouchableOpacity>
<Text style={{fontSize:40,color:"yellow"}}>MIDNIGHT</Text></View>);}
export default signup;