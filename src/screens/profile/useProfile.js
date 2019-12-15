import React, {useState,useCallback,useMemo} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
import Datastore from '../../utils/datastore'
function useProfile({navigation}){const [userData,setUserData]=useState(null)
useEffect(()=>{
fetchData();
()=>{setUserData(null)}},[])

const fetchData=useCallback(async ()=>{
let user=await Datastore.readItem("user")
setUserData(JSON.parse(user))},[])
const signOut=useCallback(()=>{Datastore.deleteItem("user")
firebaseHandle.getInstance().auth().signOut()},[])
return {userData,signOut}}
export default useProfile