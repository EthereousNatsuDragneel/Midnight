import React, { Fragment, useMemo, useEffect, useCallback } from "react";
import { StatusBar } from "react-native";
import firebaseHandle from "./src/utils/firebaseHandle";
import AppSwitchNavigator from "./src/navigation/AppSwitchNavigator";
import Datastore from './src/utils/datastore'
import NavigationService from "./src/utils/NavigationService";
function App() {
  useEffect(() => {
    firebaseHandle.init();
    firebaseHandle
      .getInstance()
      .auth()
      .onAuthStateChanged(user => {
          console.log(user)
        if (user) {
          console.log("Logged in");
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
