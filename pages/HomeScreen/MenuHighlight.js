//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

// create a component
class MenuHighlight extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ไฮไลท์สำหรับคุณ</Text>

        <View>
          <ScrollView horizontal={true}>
          <View style={{flexDirection:'column'}}>
          <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/ProfileScreen/User/user.png")}
            />
            <View>
            <Text>จ่ายที่7-Eleven</Text>
            </View>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/ProfileScreen/User/user.png")}
            />
             <Text>เชื่อมต่อGoogle Play</Text>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/ProfileScreen/User/user.png")}
            />
            <Text>เล็งไก่ให้ดีตีได้เลย</Text>
          </View>
          <View style={{flexDirection:'column'}}>
          <Image
              style={{ width: 50, height: 50 }}
              source={require("../../assets/ProfileScreen/User/user.png")}
            />
            <Text>TruePointของฉัน</Text>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  }
});

//make this component available to the app
export default MenuHighlight;
