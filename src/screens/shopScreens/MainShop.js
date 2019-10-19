import React from "react";
import { createStackNavigator } from "react-navigation";

import ShopScreen from "./ShopScreen";
import MenOutwear from "./MenOutwear";
import WomenOutwear from "./WomenOutwear";
import ProductScreen from "./ProductScreen";
import WinterSaleScreen from "./WinterSaleScreen";


const MainShop = createStackNavigator({
  Shop: {
    screen: ShopScreen,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  MenOutwear: {
    screen: MenOutwear,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  WomenOutwear: {
    screen: WomenOutwear,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  WinterSaleScreen: {
    screen: WinterSaleScreen,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  ProductScreen: {
    screen: ProductScreen,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
});

export default MainShop;
