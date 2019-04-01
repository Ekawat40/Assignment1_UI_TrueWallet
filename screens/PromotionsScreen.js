//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import LineItem from "../pages/LineItem";
import { Header } from "react-native-elements";
const rows = ["Banana", "Apple", "Cherry", "Mango", "Lime"];

// create a component
class PromotionsScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text style={{
         color: "#FF8300",
         fontWeight: 'bold',
         fontSize: 18,
         padding: 15 
      }}>โปรโมชั่น</Text>
    )
  };

  renderItem = ({ item }) => {
    return <Text style={styles.row}>{item}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <FlatList
        style={styles.container}
        data={rows}
        renderItem={this.renderItem}
      /> */}
        {/* <View>
          <Header
            backgroundColor="white"
            leftComponent={{
              text: "โปรโมชั่น",
              style: { fontSize: 15, color: "black" }
            }}
          />
        </View> */}
        <View>
          <ScrollView>
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
export default PromotionsScreen;
