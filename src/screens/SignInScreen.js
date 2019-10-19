import React, { Component } from "react";
import { AsyncStorage, View, Text } from "react-native";
import axios from "axios";

import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { Spinner } from "../Components/Spinner";

export class SignInScreen extends Component {
  state = { userName: "", email: "", password: "", loading: false, error: "" };

  componentWillMount() {
    this.getEmailPass();
  }
  getEmailPass = async () => {
    try {
      const email = await AsyncStorage.getItem("email");
      const password = await AsyncStorage.getItem("password");
      if (email !== null) {
        this.setState({ email, password });
      }
    } catch (error) {
      console.log(error);
    }
  };

  signIn() {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });
    axios
      .post("https://mobilebackend.turing.com/customers/login", {
        email: email,
        password: password,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json"
        }
      })
      .then(response => {
        this.onLoginSuccess(response);
        this.props.navigation.navigate("Dashboard");
      })
      .catch(err => this.onLoginFail(err));
  }

  onLoginFail(err) {
    this.setState({ error: "Authentication Failed", loading: false });
    console.log(err);
  }
  showError = () => {
    if (this.state.error != "")
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "#ff0000" }}>{this.state.error}</Text>
        </View>
      );
    return;
  };

  onLoginSuccess = async response => {
    this.setState({
      email: "",
      loading: false,
      error: ""
    });
    try {
      await AsyncStorage.setItem("userName", response.data.user.name);
      await AsyncStorage.setItem("email", response.data.user.email);
      await AsyncStorage.setItem("password", this.state.password);
      await AsyncStorage.setItem("token", response.data.accessToken);
    } catch (err) {
      console.log("err");
    }
  };
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.signIn.bind(this)}>Sign in</Button>;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <Input
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
          {this.showError()}
          <View style={{ flexDirection: "row" }}>
            {this.renderButton()}
            <Button
              onPress={() => this.props.navigation.navigate("SignUpScreen")}
            >
              Sign Up
            </Button>
          </View>
        </View>
        <View style={{ flex: 2 }} />
      </View>
    );
  }
}

export default SignInScreen;
