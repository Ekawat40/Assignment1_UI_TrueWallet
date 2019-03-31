//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
// create a component
const list = [
  {
    title: "ติดต่อ TrueMoney Customer Care",
    icon: "person"
  },
  {
    title: "คำถามที่พบบ่อย",
    icon: "flight-takeoff"
  },
  {
    title: "เกี่ยวกับทรูมันนี่",
    icon: "person"
  },

];
class List2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//make this component available to the app
export default List2;
