import React, { Fragment, useEffect, useCallback } from "react";
import { StatusBar } from "react-native";
import firebaseHandle from "./src/utils/firebaseHandle";
import AppSwitchNavigator from "./src/navigation/AppSwitchNavigator";
import Datastore from './src/utils/datastore'
import NavigationService from "./src/utils/NavigationService";
function App() {
  const db=useMemo(()=>firebaseHandle.getDBInstance("users"),[])
  useEffect(() => {
    firebaseHandle.init();
    firebaseHandle
      .getInstance()
      .auth()
      .onAuthStateChanged(user => {
          console.log(user)
        if (user) {
          console.log("Logged in");
          db.where("email","==",result).get().then(function(querySnapshot){
          querySnapshot.forEach(function(doc){Datastore.writeItem("user",doc.data())})}).catch(function(error){
          console.log(error)})
          NavigationService.navigate("inside");
        } else {
          console.log("Not logged in");
          NavigationService.navigate("login");
        }
      });
  }, []);
  const createNavigationRef = useCallback(
    ref => NavigationService.setTopLevelNavigator(ref),
    []
  );
  return (
    <Fragment>
      <StatusBar barStyle={"light-content"} />
      <AppSwitchNavigator ref={createNavigationRef} />
    </Fragment>
  );
}
export default App;
