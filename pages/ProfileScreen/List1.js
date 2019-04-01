//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image
} from "react-native";
import { ListItem } from "react-native-elements";
// create a component
const list = [
  {
    name: "PersonInfo",
    title: "ยอดเงินในวอลเล็ท",
    icon: "account_balance_wallet"
  },
  {
    title: "เงินคืนจากทรูมูฟเอช",
    icon: "card"
  },
  {
    name: "PersonInfo",
    title: "ยืนยันตัวตน",
    icon: "person"
  },
  {
    name: "PersonInfo",
    title: "บัตรของฉัน",
    icon: "card"
  },
  {
    name: "PersonInfo",
    title: "WeCard",
    icon: "flight-takeoff"
  },
  {
    name: "PersonInfo",
    title: "บริการที่เชื่อมต่อ",
    icon: "flight-takeoff"
  },
  {
    name: "PersonInfo",
    title: "QR Code ของฉัน",
    icon: "flight-takeoff"
  },
  {
    name: "PersonInfo",
    title: "ตั้งค่ารหัสผ่าน, PIN, Fingerprint",
    icon: "flight-takeoff"
  }
];
class List1 extends Component {
  
  constructor(props) {
    super(props)
  };
  
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          {list.map((item, i) => (
            
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </View> */}
        <View style={{ flex: 1, flexDirection: "column" }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              style={{ width: 25, height: 25, resizeMode: "contain" }}
              Image source={this.props.menuicon}
            />
            <Text style={[styles.font, { fontSize: 16 }]}> {this.props.menu}</Text>
          </View>
          <View />
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
export default List1;
