import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./navigation/AppNavigation";
import TestLinkten from './TestLinkiten'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
        {/* <TestLinkten/> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center"
  }
});
