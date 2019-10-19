import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  AsyncStorage,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";

import { fetchId } from "../../actions/EmployeeActions";

class ShopScreen extends Component {
  state = { name: "" };
  componentWillMount() {
    this.getUserName();
  }
  getUserName = async () => {
    try {
      const value = await AsyncStorage.getItem("customer");
      if (value !== null) {
        this.setState({ name: value });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {
      container,
      holidayBtn,
      menBtn,
      womanBtn,
      WinterView,
      button,
      buttonTxt
    } = styles;
    return (
      <View style={container}>
        <TouchableOpacity style={holidayBtn} activeOpacity={0.9}>
          <Text style={{ color: "#F3B453", fontSize: 13 }}>LAST CHANCE!</Text>
          <Text style={{ color: "#fff", fontSize: 13 }}>
            Holiday shipping ends soon
          </Text>
          <Text style={{ color: "#F3B453", fontSize: 13, fontWeight: "bold" }}>
            SHOP NOW
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={menBtn}
          activeOpacity={0.9}
          onPress={() => {
            this.props.navigation.navigate("MenOutwear");
            this.props.fetchId("1");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 50
            }}
          >
            MEN
          </Text>
          <Text style={{ color: "#fff", fontSize: 24 }}>OUTWEAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={womanBtn}
          activeOpacity={0.9}
          onPress={() => {
            this.props.navigation.navigate("WomenOutwear");
            this.props.fetchId("2");
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 50
            }}
          >
            WOMEN
          </Text>
          <Text style={{ color: "#fff", fontSize: 24 }}>OUTWEAR</Text>
        </TouchableOpacity>
        <View style={WinterView}>
          <ImageBackground
            source={require("../../assets/imgs/snowFlakes.png")}
            style={{
              height: 60,
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>WINTER SALE</Text>
            <Text>UP TO 60% OFF</Text>
          </ImageBackground>
          <View
            style={{
              flex: 1,
              height: 200,
              width: 300,
              backgroundColor: "#f2f2f2"
            }}
          />
        </View>

        <TouchableOpacity
          style={button}
          onPress={() => {
            this.props.navigation.navigate("WinterSaleScreen");
            this.props.fetchId("3");
          }}
        >
          <Text style={buttonTxt}>SHOP NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  holidayBtn: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#454545",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  menBtn: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#93D6DC",
    padding: 10
  },
  womanBtn: {
    flex: 3,
    alignItems: "center",
    backgroundColor: "#F6966C",
    padding: 10
  },
  WinterView: {
    flex: 5,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10
  },
  button: {
    backgroundColor: "#EFB961",
    height: 45,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: 65
  },
  buttonTxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  }
});

export default connect(
  null,
  { fetchId }
)(ShopScreen);
