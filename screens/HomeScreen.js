//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";

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
                text: "โปรโมชั่น",
                style: { fontSize: 15, color: "black" }
              }}
            />
          </View>
        </View>
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
