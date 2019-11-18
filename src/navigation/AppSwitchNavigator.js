import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack";
// import Stack from './stack'
// import Homie from './Homie'
// const AppSwitchNavigator=({auth:{screen:Stack},inside:{screen:Homie}},{headerMode:'none',initialRouteName:'inside'})
// export default createAppContainer(AppSwitchNavigator)

import login from "../screens/login/login";
import signup from "../screens/signup/signup";
import Home from "../screens/home/home";
const stack = createStackNavigator(
  { login: { screen: login }, signup: { screen: signup } },
  { initialRouteName: "login" }
);

const Homie = createStackNavigator(
  { home: { screen: Home } },
  { headerMode: "none", initialRouteName: "home" }
);

export default createAppContainer(createSwitchNavigator(
  {
    auth: stack,
    inside : Homie
  },
  {
    initialRouteName: 'auth',
  }
));