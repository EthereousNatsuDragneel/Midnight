import React, {useMemo,useCallback,useState} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
import firebase from 'firebase'
import 'firebase/firestore'
function useStore({navigation}){
const increase=firebase.firestore.FieldValue.increment(1)

//const options={description:"Buy lifeline",currency:"INR",key:"rzp_test_o0zayJvQEogYFM",amount:"15",name:"Manjot Singh",theme:{color:"navy"}}

const buyDoubleDip=useCallback(()=>firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).get().then(function(querySnapshot){
querySnapshot.forEach(function(doc){doc.ref.update({"lifelines.doubleDip":increase})})}).catch(function(error){
console.log(error)}),[])

const buyGoWithTheCrowd=useCallback(()=>firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).get().then(function(querySnapshot){
querySnapshot.forEach(function(doc){doc.ref.update({"lifelines.goWithTheCrowd":increase})})}).catch(function(error){
console.log(error)}),[])

const buyFifty=useCallback(()=>firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.getInstance().auth().currentUser.email).get().then(function(querySnapshot){
querySnapshot.forEach(function(doc){doc.ref.update({"lifelines.fifty":increase})})}).catch(function(error){
console.log(error)}),[])

return{buyDoubleDip,buyGoWithTheCrowd,buyFifty}}
export default useStore