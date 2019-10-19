import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export class InspirationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.subView, { backgroundColor: "rgba(0,0,0,0.3)" }]}
          activeOpacity={0.8}
        >
          <Text style={styles.txtStyle}>
            <Text style={{ color: "#f3b453" }}>L</Text>IFE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.subView, { backgroundColor: "rgba(0,0,0,0.5)" }]}
          activeOpacity={0.8}
        >
          <Text style={styles.txtStyle}>
            <Text style={{ color: "#f3b453" }}>F</Text>ASHION
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.subView, { backgroundColor: "rgba(0,0,0,0.7)" }]}
          activeOpacity={0.8}
        >
          <Text style={styles.txtStyle}>
            <Text style={{ color: "#f3b453" }}>V</Text>IDEOS
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    flexDirection: "row"
  },
  subView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  txtStyle: {
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: "#fff",
    fontSize: 24,
    marginBottom: 20,
    color: "#fff"
  }
};
export default InspirationScreen;
