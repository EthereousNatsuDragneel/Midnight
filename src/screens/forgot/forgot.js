import React, {useState} from 'react'
import useForgotPassword from './useForgot'
import firebaseHandle from '../../utils/firebaseHandle'
import {Alert,Text,View,TextInput,TouchableOpacity} from 'react-native'
function forgotPassword(props){const {user,setUser,updateUser,passwordResetHandle,sendMail}=useForgotPassword(props)
return(<View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"black"}}>
<Text style={{fontSize:40,color:"white",textAlign:"center"}}>Forgot Password</Text>
<TextInput value={user.email} placeholderTextColor="white" placeholder="Email:" style={{backgroundColor:"white"}} onChangeText={text=>updateUser("email",text)} autoCapitalize="none" keyboardType="email-address"/>
<TextInput value={user.code} placeholderTextColor="white" placeholder="Code" style={{backgroundColor:"white"}} onChangeText={text=>updateUser("code",text)} autoCapitalize="none"/>
<TextInput value={user.nPassword} placeholderTextColor="white" placeholder="New password:" style={{backgroundColor:"white"}} onChangeText={text=>updateUser("nPassword",text)} autoCapitalize="none" secureTextEntry/>
<TouchableOpacity onPress={sendMail}><Text style={{color:"white"}}>Send password reset email</Text></TouchableOpacity>
<TouchableOpacity onPress={passwordResetHandle}><Text style={{color:"white"}}>Confirm new password</Text></TouchableOpacity>
<Text style={{color:"white",fontSize:70}}>MIDNIGHT</Text>
</View>)}
export default forgotPassword