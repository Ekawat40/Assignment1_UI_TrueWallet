//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import { Header } from "react-native-elements";
// create a component
class ListScreen extends Component {
  static navigationOptions = {
    title: "รายการ"
  };

  state = {
    selectedTab: 0,
  };
 

  render() {
    return (
      <View style={styles.container}>
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
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ListScreen;
