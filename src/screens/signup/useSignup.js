import {useMemo,useState,useCallback} from "react";
import firebaseHandle from "../../utils/firebaseHandle";
function useSignup({ navigation }){
const [user,setUser]=useState({name: "",realName: "",type: "Teacher",email: "",password: "",cnfPassword: ""});
const [err,setErr]=useState("")
const db=useMemo(()=>firebaseHandle.getDBInstance("users"),[])
const universeDb=useMemo(()=>firebaseHandle.getDBInstance("universe"),[])
const updateUser=useCallback((keyname, value)=>{
const temp={ ...user, [keyname]: value };
setUser(temp);},[user]);
const signupHandle=useCallback(()=>{
const users=db.doc(user.name)
users.get().then(async (docSnapshot)=>{if(!docSnapshot.exists){try{
const responseData=await firebaseHandle.getInstance().auth().createUserWithEmailAndPassword(user.email, user.password).then(function(result){result.user.updateProfile({displayName:user.name})})
db.doc(user.name).set({Name:user.name,realName:user.realName,type:user.type,email:user.email,password:user.password})
universeDb.doc("Email Address Collection").set({name:{realName:user.realName,username:user.name,Email:user.email}},{merge:true})
universeDb.doc("users").set({Name:user.name,realName:user.realName,type:user.type,email:user.email,password:user.password},{merge:true})
const userj=await firebaseHandle.getInstance().auth().currentUser;
userj.sendEmailVerification().then(function(){
console.log("Email sent")}).catch(function(error){setErr(error.message)
console.log(error)});
console.log("response data:",responseData);}catch(error){setErr(error.message)
console.log("error:",error);}}
else{setErr("That username is taken")}})},[user.email,user.password]);
return{err,setErr,user,updateUser,signupHandle};}
export default useSignup;