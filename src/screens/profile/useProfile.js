import React, { useState, useCallback, useMemo, useEffect } from "react";
import firebaseHandle from "../../utils/firebaseHandle";
import Datastore from "../../utils/datastore";
function useProfile({ navigation }) {const [userData, setUserData] = useState(null);
useEffect(() => {
fetchData();
()=>{setUserData(null);};},[]);

const fetchData=useCallback(async ()=>{
firebaseHandle.getDBInstance("users").where("email","==",firebaseHandle.auth().currentUser.email).get().then(function(querySnapshot){
querySnapshot.forEach(function(doc){setUserData(doc.data())})}).catch(function(error){
console.log(error)})},[]);

const signOut = useCallback(() => {
    Datastore.deleteItem("user");
    firebaseHandle
      .getInstance()
      .auth()
      .signOut();
  }, []);
  return {signOut};
}
export default useProfile;