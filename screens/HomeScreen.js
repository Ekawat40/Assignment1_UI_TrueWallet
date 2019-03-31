//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Header } from "react-native-elements";
import LineItem from "../pages/LineItem";
import MenuHighlight from '../pages/HomeScreen/MenuHighlight'

// create a component
class HomeScreen extends Component {
  static navigationOptions = {
    title: "หน้าหลัก"
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Header
              backgroundColor="white"
              leftComponent={{
                style: { fontSize: 15, color: "black" }
              }}
            />
          </View>
        </View>
        <ScrollView>
        <View style={{ flex: 1, flexDirection: "row" , backgroundColor: 'orange'}}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/ProfileScreen/User/user.png")}
            />
            <Text>เติมเงินเช้าบัญชี</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/ProfileScreen/User/user.png")}
            />
            <Text>โอนเงิน</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/ProfileScreen/User/user.png")}
            />
            <Text>สแกน</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/ProfileScreen/User/user.png")}
            />
            <Text>จ่ายเงินร้านค้า</Text>
          </View>
        </View>

        <MenuHighlight/>
        <MenuHighlight/>
        <View>
          <ScrollView horizontal={true}>
            <LineItem source={require("../Image/promotion1.png")} />
            <LineItem source={require("../Image/promotion2.png")} />
            <LineItem source={require("../Image/promotion3.png")} />
            <LineItem source={require("../Image/promotion4.png")} />
            <LineItem source={require("../Image/promotion1.png")} />
            <LineItem source={require("../Image/promotion2.png")} />
            <LineItem source={require("../Image/promotion3.png")} />
            <LineItem source={require("../Image/promotion4.png")} />
          </ScrollView>
        </View>
        <MenuHighlight/>
        <MenuHighlight/>
        <MenuHighlight/>
        <MenuHighlight/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//make this component available to the app
export default HomeScreen;
