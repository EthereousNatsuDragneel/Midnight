import React, {useCallback,useState} from 'react'
import useForgotPassword from './useForgot'
import firebaseHandle from '../../utils/firebaseHandle'
import {Alert,Text,View,TextInput,TouchableOpacity} from 'react-native'
function forgotPassword(props){const {err,setErr,user,setUser,updateUser,passwordResetHandle,sendMail}=useForgotPassword(props)
const [show,setShow]=useState(true)
const toggle=useCallback(()=>{if(show){setShow(false)}
else{setShow(true)}},[])
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"navy"}}>
<Text style={{fontSize:30,color:"yellow",textAlign:"center"}}>Forgot Password</Text>
<Text style={{color:"yellow"}}>{err}</Text>
<TextInput style={{backgroundColor:"navy",color:"yellow"}} value={user.email} placeholderTextColor="yellow" placeholder="Email:" onChangeText={text=>updateUser("email",text)} autoCapitalize="none" keyboardType="email-address"/>
<TouchableOpacity onPress={sendMail}><Text style={{color:"yellow"}}>Send password reset email</Text></TouchableOpacity>
<Text style={{color:"yellow",fontSize:40}}>MIDNIGHT</Text>
</View>)}
export default forgotPassword