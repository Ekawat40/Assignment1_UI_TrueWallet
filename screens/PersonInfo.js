//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { Button } from "react-native-elements";
import FloatingLabelInput from "../pages/TransferMoneyScreen/FloatingLabelInput ";
// create a component โอนเงินเข้าบัญชีธนาคาร
class PersonInfo extends Component {
  handleTextChange = newText => this.setState({ value: newText });

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
        <TouchableOpacity>
          <View
            style={{
              marginLeft: 50,
              marginRight: 50,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.font, { fontSize: 16 },{paddingTop:10}]}>ธนาคารปลายทาง</Text>
              <Image
                style={{ width: 20, height: 20, marginLeft: 100 }}
                source={require("../assets/ProfileScreen/User/Transfer/arrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ padding:10 ,marginLeft:50,marginRight:50}}>
            <FloatingLabelInput
              label="เลขที่บัญชี"
              value={this.props.value}
              onChangeText={this.handleTextChange}
            />

            <FloatingLabelInput
              label="เลขที่บัญชี"
              value={this.props.value}
              onChangeText={this.handleTextChange}
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
            paddingTop:10,
            marginLeft: "auto",
            marginRight: "auto"
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
