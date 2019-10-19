import React from "react";
import { createStackNavigator } from "react-navigation";

import ContactScreen from "./ContactScreen";
import CustomerSupportScreen from "./CustomerSupportScreen";

const MainCustomerSupportScreen = createStackNavigator({
  CustomerSupportScreen: {
    screen: CustomerSupportScreen,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  ContactScreen: {
    screen: ContactScreen,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  }
});

export default MainCustomerSupportScreen;
