import React, { Component } from "react";
import { View } from "react-native";
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import Header from "../../Components/Header";
import AllProducts from "./OutwearScreens/AllProducts";
import Tshirts from "./OutwearScreens/Tshirts";
import Jeans from "./OutwearScreens/Jeans";
import Shoes from "./OutwearScreens/Shoes";
import Accessories from "./OutwearScreens/Accessories";

export class WomenOutwear extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"WOMEN"} backgroundColor={"#F6966C"} />
        <AppIndex />
      </View>
    );
  }
}

export default WomenOutwear;

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
