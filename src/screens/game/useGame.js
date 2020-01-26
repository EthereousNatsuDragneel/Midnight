import {useMemo,useState,useCallback} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
function useGame({navigation}){const set=navigation.getParam("set")
const [skipColor,setSkipColor]=useState("green")
const [qNum,setQNum]=useState(0)
const [points,setPoints]=useState(0)
const [timer,setTimer]=useState(15)
const [skip,setSkip]=useState(1)
const [question,setQuestion]=useState(set[qNum])
const tick=useCallback(()=>{setTimeout(async()=>{
if(timer>=0){setTimer(timer-1)}
else{if(qNum==9){
const increase=firebase.firestore.FieldValue.increment(points)
const r=await firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).then(function(querySnapshot){
querySnapshot.forEach(function(doc){doc.ref.update({"points":increase})})})
navigation.navigate("inside")}
else{setTimer(15)
setQNum(qNum+1)
setQuestion(set[qNum])}}},1000),[]})
const check=useCallback(async (status)=>{if(status=="correct"){
setPoints(points+15+timer)}
else{setPoints(points-15)}
if(qNum<10){setQNum(qNum+1)
setQuestion(set[qNum])}
else{const increase=firebase.firestore.FieldValue.increment(points)
const r=await firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).then(function(querySnapshot){
querySnapshot.forEach(function(doc){doc.ref.update({"points":increase})})})
navigation.navigate("inside")}},[])
skip=useCallback(async ()=>{if(skip==1){
if(qNum==9){const increase=firebase.firestore.FieldValue.increment(points)
const r=await firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).then(function(querySnapshot){
querySnapshot.forEach(function(doc){doc.ref.update({"points":increase})})})
navigation.navigate("inside")}
else{setQNum(qNum+1)
setQuestion(set[qNum])
setTimer(15)}
setSkipColor("black")
setSkip(0)}},[])
return{tick,check,skip,skipColor,question,timer}}
export default useGame