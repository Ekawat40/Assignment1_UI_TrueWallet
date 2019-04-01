//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
// create a component โอนเงินเข้าบัญชีธนาคาร
class PersonInfo extends Component {
  static navigationOptions = {
    headerTitle: (
      <Text
        style={{
          color: "#FF8300",
          fontWeight: "bold",
          fontSize: 18,
          padding: 15,
          textAlign: "center"
        }}
      >
        โอนเงินเข้าบัญชีธนาคาร
      </Text>
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 20
          }}
        >
          <Image
            style={{ width: 150, height: 100, resizeMode: "stretch" }}
            source={require("../assets/ProfileScreen/User/logo.png")}
          />
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>
            โอนเงินจากทรูมันนี่ วอลเล็ทเข้าบัญชีได้ง่ายๆ
          </Text>
        </View>
        <TouchableOpacity style={{ paddingTop:5 ,paddingLeft:10 }}>
          <Text  style={[styles.font, { fontSize: 16 }]}>ธนาคารปลายทาง                                      ></Text>
        </TouchableOpacity>

        <View>
          <TextInput
            style={{paddingTop:5, height: 40, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
        <View>
          <TextInput
            style={{ paddingTop:5,height: 40, borderColor: "gray", borderWidth: 1 }}
          />
        </View>
        <View>
          <Text
            style={[
              styles.font,
              { fontSize: 16, textAlign: "center", color: "#C6C6C6" }
            ]}
          >
            ค่าธรรมเนียม 15 บาท
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.font,
              { fontSize: 16, textAlign: "center", color: "#C6C6C6" }
            ]}
          >
            เงินจะโอนเข้าในบัญชีผู้รับใน 3 ่วโมง
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.font,
              { fontSize: 16, textAlign: "center", color: "#C6C6C6" }
            ]}
          >
            ระหว่าง 8.00 - 22.00 น. ทุกวัน
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.font,
              { fontSize: 16, textAlign: "center", color: "#C6C6C6" }
            ]}
          >
            ไม่เว้นวันหยุดราชการ และวันหยุดนักขัตฤกษ์
          </Text>
        </View>
        <View
          style={{
            width: 225,
            height: 150,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Button disabled={true} title="โอนเงินเข้าบัญชีธนาคาร" />
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  oval: {
    padding: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#FFFFFF"
  }
});

//make this component available to the app
export default PersonInfo;
