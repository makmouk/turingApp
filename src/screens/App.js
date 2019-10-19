import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import {
  FontAwesome,
  Ionicons,
  EvilIcons,
  Entypo
} from "react-native-vector-icons";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import MainShop from "./shopScreens/MainShop";
import MainCustomerSupportScreen from "./CustomerSupportScreens/MainCustomerSupportScreen";
import SignInUPScreens from "./SignInUPScreens";
import AccountScreens from "./AccountScreens/AccountScreens";

import BagScreen from "./BagScreens/BagScreen";
import MoreScreen from "./MoreScreen";
import WelcomeScreen from "./WelcomeScreen";
import InspirationScreen from "./InspirationScreen";
import StoresScreen from "./StoresScreen";
import DashboardScreen from "./DashboardScreen";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Shop: {
      screen: MainShop,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          if (focused)
            return (
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../assets/imgs/polygonF.png")}
              />
            );
          return (
            <Image
              style={{ height: 20, width: 20 }}
              source={require("../assets/imgs/polygon.png")}
            />
          );
        }
      })
    },
    Inspiration: {
      screen: InspirationScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          return (
            <Ionicons name="ios-sunny" size={30} style={{ color: tintColor }} />
          );
        }
      })
    },
    Bag: {
      screen: BagScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          return (
            <FontAwesome
              name="shopping-bag"
              size={30}
              style={{
                color: tintColor,
                borderWidth: 4,
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 15,
                paddingRight: 15,
                borderColor: "#979797",
                borderRadius: 40,
                backgroundColor: "#fff",
                position: "absolute",
                bottom: 5
              }}
            />
          );
        },
        tabBarLabel: () => {
          return null;
        }
      })
    },
    Stores: {
      screen: StoresScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          return (
            <EvilIcons name="location" size={30} style={{ color: tintColor }} />
          );
        }
      })
    },
    Chat: {
      screen: MoreScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => {
          return <Entypo name="chat" size={30} style={{ color: tintColor }} />;
        }
      })
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#454545",
      inactiveTintColor: "#D8D8D8"
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: {
      screen: DashboardTabNavigator
    },
    MainCustomerSupportScreen: MainCustomerSupportScreen,
    AccountScreens: {
      screen: AccountScreens,
      navigationOptions: () => {
        return {
          header: null
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <FontAwesome
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="bars"
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
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: DashboardStackNavigator
  },
  {
    contentComponent: DashboardScreen
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
  CustomerSupportScreen: { screen: MainCustomerSupportScreen },
  SignInUPScreens: { screen: SignInUPScreens }
});

const AppContainer = createAppContainer(AppSwitchNavigator);
