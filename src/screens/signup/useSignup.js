import { useState, useCallback } from "react";
import firebaseHandle from "../../utils/firebaseHandle";
function useSignup({ navigation }){
const [user,setUser]=useState({name: "",email: "",password: "",cnfPassword: ""});
const updateUser=useCallback((keyname, value)=>{
const temp={ ...user, [keyname]: value };
setUser(temp);},[user]);
const signupHandle=useCallback(async ()=>{
try{const responseData=await firebaseHandle.getInstance().auth().createUserWithEmailAndPassword(user.email, user.password);
const userj=await firebaseHandle.getInstance().auth().currentUser;
userj.sendEmailVerification().then(function(){
console.log("Email sent")}).catch(function(error){
console.log(error)});
console.log("response data:",responseData);}catch(error){
console.log("error:",error);}},[user.email,user.password]);
return{user,updateUser,signupHandle};}
export default useSignup;