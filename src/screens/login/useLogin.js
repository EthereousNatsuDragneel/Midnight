import { useState, useCallback, useMemo } from "react";
import firebaseHandle from "../../utils/firebaseHandle";
function useLogin({ navigation }){
const [user,setUser]=useState({email:"",password:""});
const [err,setErr]=useState("")
const updateUser=useCallback((keyname,value)=>{
const temp={...user,[keyname]:value};
setUser(temp);},[user]);
const loginHandle=useCallback(async ()=>{
try{
const responseData=await firebaseHandle.getInstance().auth().signInWithEmailAndPassword(user.email,user.password);
console.log("Response Data:",responseData);}catch(error){setErr(error)
console.log(error);}},[user.email,user.password]);

const goToForgot=useCallback(()=>{navigation.navigate("forgot")},[])
const goToSignup=useCallback(()=>{
navigation.navigate("signup");},[]);
return{err,setErr,user,updateUser,loginHandle,goToSignup,goToForgot};}
export default useLogin;