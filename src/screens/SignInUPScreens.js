import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";

import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const SignInUPScreens = createStackNavigator({
  SignInScreen: {
    screen: SignInScreen,
    navigationOptions: () => {
      return {
        headerTitle: (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24
              }}
            >
              Sign In
            </Text>
          </View>
        )
      };
    }
  },
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: () => {
      return {
        headerTitle: (
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginLeft: 90
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "center"
              }}
            >
              Sign Up
            </Text>
          </View>
        )
      };
    }
  }
});

export default SignInUPScreens;
