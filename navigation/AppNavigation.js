//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import PromotionsScreen from "../screens/PromotionsScreen";
import ListScreen from "../screens/ListScreen";
import ProfileScreen from "../screens/ProfileScreen";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Promotions: {
      screen: PromotionsScreen
    },
    List: {
      screen: ListScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home`;
        } else if (routeName === "Promotions") {
          iconName = `md-pricetag`;
        }else if(routeName === "List"){
            iconName = `ios-list`;
        }else if(routeName === "Profile"){
            iconName = `md-person`;
        }


        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "gray"
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

//make this component available to the app
export default AppContainer;
