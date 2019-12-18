import React, {useMemo,useCallback,useState} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
import firebase from 'firebase'
import 'firebase/firestore'
function useStore({navigation}){const db=useMemo(()=>firebaseHandle.getDBInstance("users"),[])
const increase=firebase.firestore.FieldValue.increment(1)
const buyDoubleDip=useCallback(()=>db.where("email","==",firebaseHandle.getInstance().auth().currentUser.email).update({"lifelines.doubleDip":increase}),[])
const buyGoWithTheCrowd=useCallback(()=>db.where("email","==",firebaseHandle.getInstance().auth().currentUser.email).update({"lifelines.goWithTheCrowd":increase}),[])
const buyFifty=useCallback(()=>db.where("email","==",firebaseHandle.getInstance().auth().currentUser.email).update({"lifelines.fifty":increase}),[])
return{buyDoubleDip,buyGoWithTheCrowd,buyFifty}}
export default useStore