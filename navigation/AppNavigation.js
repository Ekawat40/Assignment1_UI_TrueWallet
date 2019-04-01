//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
import PersonInfo from "../screens/PersonInfo";



const HomeScreenS = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
  }
);

const PromotionsS = createStackNavigator({
  Promotions: {
    screen: PromotionsScreen
  }
});

const ListScreenS = createStackNavigator({
  รายการ: {
    screen: ListScreen,
    navigationOptions: {
      header: null
    }
  }
});

const ProfileScreenS = createStackNavigator({
  Profile: {
    screen: ProfileScreen
  },
  PersonInfo: {
    screen: PersonInfo
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    หน้าหลัก: HomeScreenS,
    โปรโมชั่น: PromotionsS,
    รายการ: ListScreenS,
    ฉัน: ProfileScreenS
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "หน้าหลัก") {
          iconName = `ios-home`;
        } else if (routeName === "โปรโมชั่น") {
          iconName = `md-pricetag`;
        } else if (routeName === "รายการ") {
          iconName = `ios-list`;
        } else if (routeName === "ฉัน") {
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
