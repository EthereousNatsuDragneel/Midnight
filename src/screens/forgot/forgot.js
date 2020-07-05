import React, {useCallback,useState} from 'react'
import useForgotPassword from './useForgot'
import firebaseHandle from '../../utils/firebaseHandle'
import {Alert,Text,View,TextInput,TouchableOpacity} from 'react-native'
function forgotPassword(props){const {err,setErr,user,setUser,updateUser,passwordResetHandle,sendMail}=useForgotPassword(props)
const [show,setShow]=useState(true)
const toggle=useCallback(()=>{if(show){setShow(false)}
else{setShow(true)}},[])
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
<Text style={{fontSize:30,color:"red",textAlign:"center"}}>Forgot Password</Text>
<Text style={{color:"red"}}>{err}</Text>
<TextInput style={{backgroundColor:"white",color:"red"}} value={user.email} placeholderTextColor="red" placeholder="Email:" onChangeText={text=>updateUser("email",text)} autoCapitalize="none" keyboardType="email-address"/>
<TouchableOpacity onPress={sendMail}><Text style={{color:"red"}}>Send password reset email</Text></TouchableOpacity>
<Text style={{color:"red",fontSize:40}}>FoodGate</Text>
</View>)}
export default forgotPassword