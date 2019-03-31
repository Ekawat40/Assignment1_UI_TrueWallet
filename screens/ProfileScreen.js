//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { ListItem } from "react-native-elements";
import Logout from "../pages/ProfileScreen/Logout";
import List1 from "../pages/ProfileScreen/List1";
import List2 from "../pages/ProfileScreen/List2";
import User from "../pages/ProfileScreen/User";
import MenuBalance from "../pages/ProfileScreen/MenuBalance";
// create a component
const list = [
  {
    title: "โอนเงินเข้าบัญชีธนาคาร",
    icon: "person"
  }
];
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
        <ScrollView>
          <User
            userIcon={require("../assets/ProfileScreen/User/user.png")}
            name={"เอกวัฒน์ ปทุมรังษี"}
            tel={"082-330-3825"}
            email={"aekwatt@hotmail.com"}
          />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <MenuBalance money={"100.9"} />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <List1 />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <View style={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
              />
            ))}
          </View>
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <List2 />
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Logout/>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  spec: {
    backgroundColor: "#F8F8F8"
  }
});

//make this component available to the app
export default ProfileScreen;
