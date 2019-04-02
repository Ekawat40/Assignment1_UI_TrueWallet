// Setting screen
import React, { Component } from "react";
//import react in our code.
import { Text, View, Image, StyleSheet } from "react-native";
//import all the components we are going to use.

export default class SecondPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20
          }}
        >
          <Image
            style={{ width: 175, height: 175, alignItems: "center" }}
            source={require("../assets/ListScreen/FavoritesList/logo.png")}
          />
          <Text style={[{ color: "#CACACA" }]}>ยังไม่มีรายการโปรด</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFFFFF",
            padding: 15,
            margin: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            style={{ width: 20, height: 20, alignItems: "center" }}
            source={require("../assets/ListScreen/FavoritesList/plus.png")}
          />
          <Text style={[{ color: "#FF8300" }]}>  เพิ่มรายการโปรด</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0"
  }
});
