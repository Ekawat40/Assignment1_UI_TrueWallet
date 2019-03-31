//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
// create a component
const list = [
  {
    title: "ยอดเงินในวอลเล็ท",
    icon: "person"
  },
  {
    title: "เงินคืนจากทรูมูฟเอช",
    icon: "flight-takeoff"
  },
  {
    title: "ยืนยันตัวตน",
    icon: "person"
  },
  {
    title: "บัตรของฉัน",
    icon: "card"
  },
  {
    title: "WeCard",
    icon: "flight-takeoff"
  },
  {
    title: "บริการที่เชื่อมต่อ",
    icon: "flight-takeoff"
  },
  {
    title: "QR Code ของฉัน",
    icon: "flight-takeoff"
  },
  {
    title: "ตั้งค่ารหัสผ่าน, PIN, Fingerprint",
    icon: "flight-takeoff"
  }
];
class List1 extends Component {
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
    flex: 1,
    flexDirection: 'column',
  }
});

//make this component available to the app
export default List1;
