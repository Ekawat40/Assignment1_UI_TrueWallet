//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
// create a component
class ProfileScreen extends Component {
  static navigationOptions = {
    title: "ฉัน"
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            backgroundColor="white"
            leftComponent={{
              text: "ฉัน",
              style: { fontSize: 15, color: "black" }
            }}
          />
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
    alignItems: "center"
  }
});

//make this component available to the app
export default ProfileScreen;
