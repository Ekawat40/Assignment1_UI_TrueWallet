//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Header, Button } from "react-native-elements";
import LineItem from "../pages/LineItem";
import MenuHighlight from "../pages/HomeScreen/MenuHighlight";


// create a component
class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: (
      <Image
        style={{
          width: 130,
          height: 30,
          resizeMode: "stretch",
          padding: 5,
          justifyContent: "center",
          alignItems: "center"
        }}
        source={require("../assets/HomeScreen/truemoneyLogo.png")}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "#FF8300",
              padding: 10
            }}
          >
            <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/HomeScreen/เติมเงินเข้าบัญชี.png")}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={[
                    { color: "#FFFFFF", textAlign: "center", fontSize: 12 }
                  ]}
                >
                  เติมเงินเช้าบัญชี
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  source={require("../assets/HomeScreen/โอนเงิน.png")}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={[
                    { color: "#FFFFFF", textAlign: "center", fontSize: 12 }
                  ]}
                >
                  โอนเงิน
                </Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  source={require("../assets/HomeScreen/สแกน.png")}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={[
                    { color: "#FFFFFF", textAlign: "center", fontSize: 12 }
                  ]}
                >
                  สแกน
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "column", padding: 10 }}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  source={require("../assets/HomeScreen/จ่ายเงินร้านค้า.png")}
                />
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text
                  style={[
                    { color: "#FFFFFF", textAlign: "center", fontSize: 12 }
                  ]}
                >
                  จ่ายเงินร้านค้า
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#FF8300"
            }}
          >
            <View style={styles.oval}>
              <MenuHighlight />
            </View>
            <View>
              <Text style={styles.spec}> </Text>
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF"
              }}
            >
              <MenuHighlight />
            </View>
            <View
              style={{
                backgroundColor: "#FFFFFF"
              }}
            >
              <ScrollView horizontal={true}>
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
            <View
              style={{
                backgroundColor: "#FFFFFF"
              }}
            >
              <MenuHighlight />
              <View>
                <Text style={styles.spec}> </Text>
              </View>
              <MenuHighlight/>
              <View>
                <Text style={styles.spec}> </Text>
              </View>
              <MenuHighlight />
              <View>
                <Text style={styles.spec}> </Text>
              </View>
              <MenuHighlight />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  oval: {
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#FFFFFF"
  },
  spec: {
    height: 4,
    backgroundColor: "#F8F8F8"
  }
});
//make this component available to the app
export default HomeScreen;
