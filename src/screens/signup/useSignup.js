import {useMemo,useState,useCallback} from "react";
import firebaseHandle from "../../utils/firebaseHandle";
function useSignup({ navigation }){
const [user,setUser]=useState({name: "",email: "",password: "",cnfPassword: ""});
const [err,setErr]=useState("")
const db=useMemo(()=>firebaseHandle.getDBInstance("users"),[])
const updateUser=useCallback((keyname, value)=>{
const temp={ ...user, [keyname]: value };
setUser(temp);},[user]);
const signupHandle=useCallback(async ()=>{
try{const responseData=await firebaseHandle.getInstance().auth().createUserWithEmailAndPassword(user.email, user.password);
db.add({Name:user.name,email:user.email,password:user.password,lifelines:{doubleDip:1,fifty:1,goWithTheCrowd:1}})
const userj=await firebaseHandle.getInstance().auth().currentUser;
userj.sendEmailVerification().then(function(){
console.log("Email sent")}).catch(function(error){setErr(error.message)
console.log(error)});
console.log("response data:",responseData);}catch(error){setErr(error.message)
console.log("error:",error);}},[user.email,user.password]);
return{err,setErr,user,updateUser,signupHandle};}
export default useSignup;