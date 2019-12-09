import React, {useState} from 'react'
import {TouchableOpacity,Text, View} from 'react-native'
import useProfile from './useProfile'
function Profile(props){const {userData,signOut}=useProfile(props)
if(userData==null){return(<View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"navy"}}>
<Text style={{color:"yellow",fontSize:70}}>LOADING</Text>
</View>)}
return(<View style={{flex:1,backgroundColor:"navy",alignItems:"center",justifyContent:"center"}}>
<Text style={{color:"yellow",fontSize:30,textAlign:"center"}}>My Profile</Text>
<Text style={{textAlign:"center",color:"yellow"}}>Name: {userData.name} {"\n"}
Email: {userData.email} {"\n"}
Lifelines {"\n"}
Double Dip: {userData.lifelines.doubleDip} {"\n"}
50 50: {userData.lifelines.fifty} {"\n"}
Go With the Crowd: {userData.lifelines.goWithTheCrowd}</Text>
<TouchableOpacity onPress={signOut()}><Text style={{color:"yellow",textAlign:"center"}}>Sign out</Text></TouchableOpacity>
<Text style={{color:"yellow",fontSize:40,textAlign:"center"}}>MIDNIGHT</Text>
</View>)}
export default Profile