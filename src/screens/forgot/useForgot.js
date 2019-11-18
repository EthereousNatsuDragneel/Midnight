import {useState,useCallback} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
function useForgotPassword({navigation}){
const [user,setUser]=useState({email:"",code:"",nPassword:""})
const updateUser=useCallback((keyname,value)=>{
const temp={...user,[keyname]:value}
setUser(temp)},[user])
const sendMail=useCallback(async ()=>{try{
const responseData=await firebaseHandle.getInstance().auth().sendPasswordResetEmail(user.email)}
catch(error){console.log(error)}},[user.email])
const passwordResetHandle=useCallback(async ()=>{try{
const responseData=await firebaseHandle.getInstance().auth().confirmPasswordReset(user.code,user.nPassword)}
catch(error){console.log(error)}},[user.code,user.nPassword])
return{user,setUser,updateUser,passwordResetHandle,sendMail}}
export default useForgotPassword