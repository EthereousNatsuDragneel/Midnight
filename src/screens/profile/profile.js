import React, { useState, Component } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import firebaseHandle from '../../utils/firebaseHandle'
import useProfile from "./useProfile";

function Profile(props){const {signOut}=useProfile(props)
const [userData,setUserData]=useState(null)
firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).get().then(function(querySnapshot){
querySnapshot.forEach(function(doc){setUserData(doc.data())})}).catch(function(error){
console.log(error)})
if(userData==null){return(<View style={{flex:1,backgroundColor:"navy",alignItems:"center",justifyContent:"center"}}>
<Text style={{fontSize:70,color:"yellow",textAlign:"center"}}>LOADING</Text></View>)}
return(<View style={{flex:1,backgroundColor:"navy",alignItems:"center",justifyContent:"center"}}>
<Text style={{color:"yellow",fontSize:30,textAlign:"center"}}>My Profile</Text>
<Text style={{textAlign:"center",color:"yellow"}}>
Name: {userData && userData.Name} {"\n"}
Email: {userData && userData.email} {"\n"}
Lifelines: {"\n"}
Double Dip: {userData && userData.lifelines.doubleDip} {"\n"}
50 50: {userData && userData.lifelines.fifty} {"\n"}
Go With the Crowd: {userData && userData.lifelines.goWithTheCrowd}
</Text>
<TouchableOpacity onPress={signOut}><Text style={{color:"yellow",textAlign:"center"}}>Sign out</Text></TouchableOpacity>
<Text style={{color:"yellow",fontSize:40,textAlign:"center"}}>MIDNIGHT</Text>
</View>);}
export default Profile;