//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,Image } from "react-native";
// create a component

class MenuTop extends Component {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  }
});

//make this component available to the app
export default MenuTop;
