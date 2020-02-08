import React, {useEffect,useState,useCallback} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
function useGame({navigation}){const set=navigation.getParam("set")
const [time,setTime]=useState(15)
const [QNum,setQNum]=useState(1)
useEffect(()=>{if(time>0){
const timeout=setTimeout(()=>{setTime(time-1)},1000)
return ()=>clearTimeout(timeout)}
else{if(QNum>9){
navigation.navigate("inside")}
else{setQNum(QNum+1)
const timeout=setTimeout(()=>{setTime(15)},1000)
return ()=>clearTimeout(timeout)}}},[time])
return{QNum,time,set}}
export default useGame