import {useState,useCallback,useMemo} from 'react'
import firebaseHandle from '../../utils/firebaseHandle'
import Datastore from '../../utils/datastore'
function useProfile({navigation}){const [userData,setUserData]=useState(null)
setUserData(Datastore.readItem("user"))
const signOut=useCallback(async ()=>{await Datastore.deleteItem("user")
firebaseHandle.getInstance().auth().signOut()},[])
return {userData,signOut}}
export default useProfile