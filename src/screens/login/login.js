import React, {useCallback,useState} from "react";
import useLogin from "./useLogin";
import {Alert,Text, View, TouchableOpacity, TextInput } from "react-native";
function login(props){const{err,setErr,user,updateUser,goToSignup,loginHandle,goToForgot}=useLogin(props);
const [show,setShow]=useState(true)
const toggle=useCallback(()=>{if(show){setShow(false)}
else{setShow(true)}},[])
return(<View style={{flex:1,justifyContent: "center",alignItems: "center",backgroundColor: "black"}}>
<Text style={{color:"white",fontSize: 30 }}>LOGIN</Text>
<Text style={{color:"white"}}>{err}</Text>
<TextInput style={{backgroundColor:"white"}} value={user.email} placeholderTextColor="white" placeholder="Email:" onChangeText={text=>updateUser("email",text)} keyboardType="email-address" autoCapitalize="none"/>
<TextInput style={{backgroundColor:"white"}} value={user.password} placeholderTextColor="white" placeholder="Password" onChangeText={text=>updateUser("password",text)} autoCapitalize="none" secureTextEntry={show}/>
<TouchableOpacity onPress={toggle}><Text style={{color:"white"}}>Show/hide password</Text></TouchableOpacity>
<TouchableOpacity onPress={loginHandle}><Text style={{ color: "white" }}>Login</Text></TouchableOpacity>
<TouchableOpacity onPress={goToForgot}><Text style={{color:"white"}}>Forgot password?</Text></TouchableOpacity>
<TouchableOpacity onPress={goToSignup}><Text style={{ color: "white" }}>Sign up</Text></TouchableOpacity>
<Text style={{ fontSize: 40, color: "white" }}>MIDNIGHT</Text>
</View>);}
export default login;