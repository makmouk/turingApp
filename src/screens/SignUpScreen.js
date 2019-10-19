import React, { Component } from "react";
import { AsyncStorage, View, Text } from "react-native";
import axios from "axios";

import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { Spinner } from "../Components/Spinner";

export class SignUpScreen extends Component {
  state = { userName: "", email: "", password: "", loading: false, error: "" };

  signUp() {
    const { email, password, userName } = this.state;

    this.setState({ error: "", loading: true });
    var response = axios
      .post("https://mobilebackend.turing.com/customers", {
        name: userName,
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

  onLoginFail = err => {
    this.setState({ error: "Authentication Failed", loading: false });
    console.log(err);
  };

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
      userName: "",
      email: "",
      password: "",
      loading: false,
      error: ""
    });
    try {
      await AsyncStorage.setItem("userName", response.data.customer.name);
      await AsyncStorage.setItem("email", response.data.customer.email);
      await AsyncStorage.setItem("password", this.state.password);
      await AsyncStorage.setItem("token", response.data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.signUp.bind(this)}>Sign up</Button>;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Input
            placeholder="username"
            label="User Name"
            value={this.state.userName}
            onChangeText={userName => this.setState({ userName })}
          />
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
          {this.renderButton()}
        </View>
        <View style={{ flex: 1.2 }} />
      </View>
    );
  }
}

export default SignUpScreen;
