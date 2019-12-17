//IOS 414 736

import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './src/screens/Login/login';
import signUp from './src/screens/SignUp/signUp';


const AppStack = createStackNavigator(
  {
    Login :{
      screen:login,
    },
    SignUp:{
      screen:signUp,
    }
  });

export default AppContainer = createAppContainer(AppStack);