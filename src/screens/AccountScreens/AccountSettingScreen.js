import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Input1 from "../../Components/Input1";
import axios from "axios";

export class AccountSettingScreen extends Component {
  state = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  };

  setAttributes = async () => {
    const {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipCode,
      country
    } = this.state;
    try {
      await AsyncStorage.setItem("firstName", firstName);
      await AsyncStorage.setItem("lastName", lastName);
      await AsyncStorage.setItem("address1", address1);
      await AsyncStorage.setItem("address2", address2);
      await AsyncStorage.setItem("city", city);
      await AsyncStorage.setItem("state", state);
      await AsyncStorage.setItem("zipCode", zipCode);
      await AsyncStorage.setItem("country", country);
    } catch (err) {
      console.log("err");
    }
    console.log('hellooooooooo')
    this.props.navigation.navigate("MyAccountScreen");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
          <Input1
            placeholder=""
            label="First Name"
            value={this.state.firstName}
            onChangeText={firstName => this.setState({ firstName })}
          />
          <Input1
            placeholder=""
            label="Last Name"
            value={this.state.lastName}
            onChangeText={lastName => this.setState({ lastName })}
          />
        </View>
        <Input1
          placeholder=""
          label="Address Line 1"
          value={this.state.address1}
          onChangeText={address1 => this.setState({ address1 })}
        />
        <Input1
          placeholder=""
          label="Address Line 2"
          value={this.state.address2}
          onChangeText={address2 => this.setState({ address2 })}
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Input1
            placeholder=""
            label="City"
            value={this.state.city}
            onChangeText={city => this.setState({ city })}
          />
          <Input1
            placeholder=""
            label="State"
            value={this.state.state}
            onChangeText={state => this.setState({ state })}
          />
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Input1
            placeholder=""
            label="Zip Code"
            value={this.state.zipCode}
            onChangeText={zipCode => this.setState({ zipCode })}
          />
          <Input1
            placeholder=""
            label="Country"
            value={this.state.country}
            onChangeText={country => this.setState({ country })}
          />
        </View>
        <View style={{ flex: 3 }} />
        <TouchableOpacity
          style={styles.button}
          onPress={this.setAttributes.bind(this)}
        >
          <Text style={styles.buttonTxt}>SAVE SETTINGS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: "#454545",
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
});

export default AccountSettingScreen;
