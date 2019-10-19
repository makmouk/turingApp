import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import { FontAwesome, Ionicons, EvilIcons } from "react-native-vector-icons";

export class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Shop")}
          >
            <Image
              style={{ height: 25, width: 20 }}
              source={require("../assets/imgs/polygonShop.png")}
            />
            <Text style={styles.btnText}>Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Bag")}
          >
            <FontAwesome
              name="shopping-bag"
              size={25}
              style={{
                color: "#fff"
              }}
            />
            <Text style={styles.btnText}>Bag</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Inspiration")}
          >
            <Ionicons name="ios-sunny" size={30} style={{ color: "#fff" }} />
            <Text style={styles.btnText}>Inspiration</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("Stores")}
          >
            <EvilIcons name="location" size={30} style={{ color: '#fff' }} />
            <Text style={styles.btnText}>Stores</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.btnRow}
          onPress={() => this.props.navigation.navigate("AccountScreens")}
        >
          <Text style={styles.btnText}>My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRow}
          onPress={() =>
            this.props.navigation.navigate("CustomerSupportScreen")
          }
        >
          <Text style={styles.btnText}>Customer Support</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnRow}
          onPress={() => this.props.navigation.navigate("WelcomeScreen")}
        >
          <Text style={{ color: "#F3B453" }}>Log out</Text>
        </TouchableOpacity>

        <View style={styles.followContainer}>
          <Text style={{ color: "#7E7E7E" }}>FOLLOW US</Text>
          <View style={styles.social}>
            <TouchableOpacity style={styles.socialBtn}>
              <Image
                source={require("../assets/imgs/facebook.png")}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image
                source={require("../assets/imgs/twitter.png")}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn}>
              <Image
                source={require("../assets/imgs/pintrest.png")}
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#454545"
  },
  btn: {
    flex: 1,
    height: 150,
    borderWidth: 0.5,
    borderColor: "#585858",
    alignItems: "center",
    justifyContent: "center"
  },
  btnContainer: {
    flexDirection: "row"
  },
  btnText: {
    color: "#fff"
  },
  btnRow: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#585858",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#454545"
  },
  followContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  social: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 30
  },
  img: {
    width: 60,
    height: 70
  },
  socialBtn: {
    flex: 1
  }
};

export default DashboardScreen;
