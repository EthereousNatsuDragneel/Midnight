import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from "react-navigation-stack";
import login from "../screens/login/login";
import signup from "../screens/signup/signup";
import forgotPassword from '../screens/forgot/forgot'
import Home from "../screens/home/home";
import Store from '../screens/store/store'
import Profile from '../screens/profile/profile'
const stack=createStackNavigator({forgot:{screen:forgotPassword},login:{screen:login},signup:{screen:signup}},{initialRouteName:"login"});
const Homie=createBottomTabNavigator({home:{screen:Home},store:{screen:Store},profile:{screen:Profile}},{headerMode:"none",initialRouteName:"home"});
export default createAppContainer(createSwitchNavigator({auth:stack,inside:Homie},{initialRouteName:'auth',}));