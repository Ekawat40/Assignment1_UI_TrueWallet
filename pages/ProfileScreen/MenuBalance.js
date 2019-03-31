//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
// create a component

class MenuBalance extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={[styles.font, { fontSize: 16 }]}>ยอดเงินคงเหลือ</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={[styles.font, { fontSize: 16 }, { textAlign: "right" }]}> {this.props.money} ฿ </Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 15
  }
});

//make this component available to the app
export default MenuBalance;