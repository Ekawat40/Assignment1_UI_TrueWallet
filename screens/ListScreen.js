// //import liraries
// import React, { Component } from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { Header } from "react-native-elements";

// // create a component
// class ListScreen extends Component {
//   static navigationOptions = {
//     title: "รายการ"
//   };

//   state = {
//     selectedTab: 0
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//           <Header
//             backgroundColor="white"
//             leftComponent={{
//               text: "โปรโมชั่น",
//               style: { fontSize: 15, color: "black" }
//             }}
//           />
//         </View>

//       </View>
//     );
//   }
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });

// //make this component available to the app
// export default ListScreen;

//This is an example of React Native Tab
import React from 'react';

//import react in our code.
//For React Navigation Version 2+
//import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
//import Navigator in our project
import { View, Text, StyleSheet, Image, ScrollView ,TouchableOpacity} from "react-native";
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';
import { Header } from "react-native-elements";
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export


const TabScreen = createMaterialTopTabNavigator(
  {
    รายการล่าสุด: { screen: FirstPage },
    รายการโปรด: { screen: SecondPage },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#000000',
      style: {
        backgroundColor: '#FFFFFF',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);


 
//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '# ',
      title: 'รายการ',
    },
    
  },
});




//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);
