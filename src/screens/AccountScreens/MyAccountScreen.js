import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-vector-icons";

export class MyAccountScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>MY ACCOUNT</Text>
        </View>
        <View style={{ flex: 3 }}>
          <TouchableOpacity
            style={styles.statusbtn}
            onPress={() => this.props.navigation.navigate("OrderStatusScreen")}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              flex: 1
            }}
          >
            <Text style={{ marginLeft: 20 }}>Last Order: 30.12.20</Text>
            <Text style={{ marginRight: 20 }}>ID: c945387433</Text>
          </View>
        </View>
        <View style={{ flex: 5 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("PaymentInformationScreen")
            }
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                
              </View>
              <View
                style={{
                  flex: 6,
                  marginTop: 15
                }}
              >
                <Text style={styles.txt1}>Payment Information</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("AccountSettingScreen")
            }
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                
              </View>
              <View
                style={{
                  flex: 6,
                  marginTop: 15
                }}
              >
                <Text style={styles.txt1}>Settings</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  headerView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  statusbtn: {
    backgroundColor: "#454545",
    margin: 20,
    alignSelf: "stretch",
    height: 80
  },
  txt1: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18
  },
  button: {
    backgroundColor: "#fff",
    height: 100,
    borderWidth: 0.5,
    borderColor: "#BFBFBF"
  }
});

export default MyAccountScreen;
