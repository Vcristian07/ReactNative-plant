import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";

import Welcome from "../screens/Welcome";
// import Browse from "../screens/Browse";
// import Login from "../screens/Login";
// import Explore from "../screens/Explore";
// import Settings from "../screens/Settings";
// import Product from "../screens/Product";
// import Signup from '../screens/Signup'

import { theme } from "../constants";
const screens = createStackNavigator(
  {
    Welcome,
    // Login,
    // Explore,
    // Browse,
    // Product,
    // Settings,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {},
      headerBackImage: <Image />,
      headerBackTitle: null,
      headerLeftContainerStyle: {},
      headerRightContainerStyle: {},
    },
  }
);

export default createAppContainer(screens);
