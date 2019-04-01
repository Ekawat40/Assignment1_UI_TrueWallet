// Home screen
import React, { Component } from "react";
//import react in our code.
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
//import all the components we are going to use.

export default class FirstPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.spec}>08 มีนาคม 2562</Text>
          </View>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 }}>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={require("../assets/ListScreen/LastedList/IconScb.png")}
                />
              </View>
              <View style={{ flex: 3, flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text>ไอแบงก์กิ้ง ธนาคารไทยพาณิชย์</Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" }
                    ]}
                  >
                    +100.00
                  </Text>
                  <Text
                    style={[
                      styles.font,
                      { fontSize: 16 },
                      { textAlign: "right", fontWeight: "bold" ,color: "#FF8300",}
                    ]}
                  >
                    ฿
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    style={{ width: 20, height: 20 }}
                    source={require("../assets/ListScreen/LastedList/clock.png")}
                  />
                  <Text>18:22</Text>
                </View>
              </View>
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
  spec: {
    backgroundColor: "#F8F8F8",
    padding: 15
  }
});
