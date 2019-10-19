import React, { Component } from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>storex</Text>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          Follow the latest fashion trends{"\n"}and shop with{" "}
          <Text style={{ color: "#EFB961" }}>storex!</Text>
        </Text>
        <Image
          style={styles.img}
          source={require("../assets/imgs/signinscreen.png")}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("SignInUPScreens")}
        >
          <Text style={styles.buttonTxt}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor:'#fff',
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    borderBottomWidth: 5,
    borderTopWidth: 5,
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 20
  },
  img: {
    width: 260,
    height: 300
  },
  button: {
    backgroundColor: "#EFB961",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0
  },
  buttonTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24
  }
};

export default WelcomeScreen;
