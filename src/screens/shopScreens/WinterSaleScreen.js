import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import AllProducts from "./OutwearScreens/AllProducts";
import Tshirts from "./OutwearScreens/Tshirts";
import Jeans from "./OutwearScreens/Jeans";
import Shoes from "./OutwearScreens/Shoes";
import Accessories from "./OutwearScreens/Accessories";

export class WinterSaleScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            paddingTop: 5,
            position: "relative"
          }}
        >
          <Text style={{ fontWeight: "bold" }}>WINTER SALE</Text>
          <Text style={{ fontSize: 24 }}>UP TO 60% OFF</Text>
        </View>
        <AppIndex />
      </View>
    );
  }
}

export default WinterSaleScreen;

const AppNavigator = createMaterialTopTabNavigator(
  {
    AllProducts,
    Jeans,
    Tshirts,
    Shoes,
    Accessories
  },
  {
    tabBarOptions: {
      activeTintColor: "#93D6DC",
      inactiveTintColor: "#000",
      scrollEnabled: true,
      style: {
        backgroundColor: "#F2F2F2"
      }
    }
  }
);

const AppIndex = createAppContainer(AppNavigator);
