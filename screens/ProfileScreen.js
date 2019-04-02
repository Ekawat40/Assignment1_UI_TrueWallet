//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Header } from "react-native-elements";
import { ListItem } from "react-native-elements";
import Logout from "../pages/ProfileScreen/Logout";
import List1 from "../pages/ProfileScreen/List1";
import List2 from "../pages/ProfileScreen/List2";
import User from "../pages/ProfileScreen/User";
import MenuBalance from "../pages/ProfileScreen/MenuBalance";
// create a component

class ProfileScreen extends Component {
  static navigationOptions = {
    headerTitleStyle: { alignSelf: 'center' },
    headerTitle: (
      <Text
        style={{
          color: "#000000",
          fontWeight: "bold",
          fontSize: 18,
          padding: 15,
          textAlign: "center",
        
        }}
      >
        ฉัน
      </Text>
    )
  };

  render() {
    return (
      <View style={styles.container}>
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
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/Untitled.png")}
            menu={"ยอดเงินในวอลเล็ท"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/เงินคืนจากทรูมูฟเอช.png")}
            menu={"เงินคืนจากรูมูฟเอช"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/ยืนยันตัวตน.png")}
            menu={"ยืนยันตัวตน"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/บัตรของฉัน.png")}
            menu={"บัตรของฉัน"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/WeCard.png")}
            menu={"WeCard"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/บริการที่เชื่อมต่อ.png")}
            menu={"บริการที่เชื่อมต่อ"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/QRcode.png")}
            menu={"QR Code ของฉัน"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/ตั้งรหัส.png")}
            menu={"ตั้งค่ารหัสผ่าน, PIN, Fingerprint"}
          />

          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("PersonInfo")}
          >
            <List1
              menuicon={require("../assets/ProfileScreen/User/menu/โอนเงิน.png")}
              menu={"โอนเงินเข้าบัญชีธนาคาร"}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/ติดต่อ.png")}
            menu={"ติดต่อ TrueMoney Customer Care"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/คำถาม.png")}
            menu={"คำถามที่พบบ่อย"}
          />
          <List1
            menuicon={require("../assets/ProfileScreen/User/menu/เกี่ยวกับ.png")}
            menu={"เกี่ยวกับทรูมันนี่"}
          />

          <View>
            <Text style={styles.spec}> </Text>
          </View>
          <Logout />
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
