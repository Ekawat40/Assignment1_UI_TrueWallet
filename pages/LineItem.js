//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";

// create a component
class LineItem extends Component {
  render() {
    let name = this.props.name;
    return (
      <View style={styles.container}>
        <View style={styles.test}>
          <Image style={styles.picture} source={this.props.source} />
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
  },
  menu: {
    height: 50,
    width: 50,
    padding: 5,
    borderWidth: 1,
    alignItems: "center",
  },
  label: {
    textAlign: "center",
    fontSize: 11,
    padding: 5
  },
  picture: {
    height: 150,
    width: 320,
    resizeMode: 'stretch'
  },
  test: {
    flex: 1
  }
});

//make this component available to the app
export default LineItem;
