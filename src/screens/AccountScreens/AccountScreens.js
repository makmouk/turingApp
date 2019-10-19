import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";


import MyAccountScreen from "./MyAccountScreen";
import AccountSettingScreen from "./AccountSettingScreen";
import OrderStatusScreen from "./OrderStatusScreen";
import PaymentInformationScreen from "./PaymentInformationScreen";

const AccountScreens = createStackNavigator({
  MyAccountScreen: {
    screen: MyAccountScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerTitle: (
          <Text
            style={{
              borderBottomWidth: 2,
              borderTopWidth: 2,
              marginLeft: 100,
              fontWeight: "bold",
              fontSize: 24
            }}
          >
            store
          </Text>
        )
      };
    }
  },
  AccountSettingScreen: {
    screen: AccountSettingScreen,
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
              Settings
            </Text>
          </View>
        )
      };
    }
  },
  OrderStatusScreen: {
    screen: OrderStatusScreen,
    navigationOptions: () => {
      return {
        headerTitle: (
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginLeft: 30
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "center"
              }}
            >
              Order Status
            </Text>
          </View>
        )
      };
    }
  },
  PaymentInformationScreen: {
    screen: PaymentInformationScreen,
    navigationOptions: () => {
      return {
        headerTitle: (
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginLeft: 20
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "center"
              }}
            >
              Payment Information
            </Text>
          </View>
        )
      };
    }
  }
});

export default AccountScreens;
