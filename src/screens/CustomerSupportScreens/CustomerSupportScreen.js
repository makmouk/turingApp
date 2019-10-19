import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-vector-icons";
export class CustomerSupportScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            Customer Support
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("ContactScreen")}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 4 }}>
              <Text style={styles.txt1}>Contact</Text>
              <Text style={styles.txt2}>Ask questions or get contact info</Text>
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
        <TouchableOpacity style={styles.button}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 4 }}>
              <Text style={styles.txt1}>Customer Service</Text>
              <Text style={styles.txt2}>FAQ and company policies.</Text>
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
        <View style={{ flex: 5 }} />
      </View>
    );
  }
}
styles = {
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    flex: 2,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#BFBFBF"
  },
  txt1: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 18
  },
  txt2: {
    marginLeft: 20,
    color: "#999999"
  }
};

export default CustomerSupportScreen;
