import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import ImageSlider from "react-native-image-slider";
import axios from "axios";
import { connect } from "react-redux";
import { setCartId } from "../../actions";
import { Actions } from "react-native-router-flux";

export class ProductScreen extends Component {
  state = {
    images: [],
    product: []
  };
  componentWillMount() {
    axios
      .get(
        "https://mobilebackend.turing.com/products/" + this.props.productId,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(response => {
        //console.log(response);
        this.setState({
          product: response.data,
          images: [response.data.image, response.data.image_2]
        });
      });
  }
  addToCart = async () => {
    try {
      if (!(await AsyncStorage.getItem("cartId"))) {
        await axios
          .get(
            "https://mobilebackend.turing.com/shoppingcart/generateUniqueId",
            {
              headers: {
                "Content-Type": "application/json"
              }
            }
          )
          .then(response => {
            console.log(response.data.cart_id);
            AsyncStorage.setItem("cartId", response.data.cart_id);
          });
      }
      var cartId = await AsyncStorage.getItem("cartId");
      console.log(cartId)
      axios
        .post("https://mobilebackend.turing.com/shoppingcart/add", {
          cart_id: cartId,
          product_id: this.props.productId,
          attributes: "red",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            accept: "application/json"
          }
        })
        .then(response => {
          this.props.setCartId(cartId);
        })
        .catch(err => {
          console.log(err);
        });
    } catch (err) {console.log(err)}
  };
  render() {
    const { description, discounted_price, price } = this.state.product;
    return (
      <View style={styles.container}>
        <ImageSlider images={this.state.images} style={{ flex: 3 }} />
        <View
          style={{
            flex: 1,
            margin: 20,
            backgroundColor: "#F2F2F2",
            marginBottom: 70
          }}
        >
          <Text style={{ margin: 10 }}>{description}</Text>
        </View>
        <View style={styles.bottomBarContainer}>
          <TouchableOpacity style={styles.customizeBtn}>
            <Ionicons
              name="ios-arrow-up"
              size={30}
              style={{ color: "#D8D8D8" }}
            />
            <Text>CUSTOMIZE</Text>
          </TouchableOpacity>
          <View style={styles.priceStyle}>
            <Text style={{ color: "#D8D8D8", fontSize: 14 }}>
              {parseInt(discounted_price) === 0 ? "" : "$" + price}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              ${parseInt(discounted_price) === 0 ? price : discounted_price}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.addToCart();
              Actions.pop();
            }}
            style={styles.addToCartBtn}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              ADD TO CART
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 2,
    marginTop: 30
  },
  bottomBarContainer: {
    position: "absolute",
    right: 0,
    left: 0,
    bottom: 0,
    height: 55,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#D8D8D8",
    flexDirection: "row"
  },
  customizeBtn: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: "#D8D8D8",
    alignItems: "center",
    justifyContent: "center"
  },
  priceStyle: {
    flex: 1,
    alignItems: "flex-end"
  },
  addToCartBtn: {
    flex: 1.3,
    backgroundColor: "#F3B453",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5
  }
});
const mapStateToProps = state => {
  return { productId: state.auth.productId, cartId: state.auth.cartId };
};
export default connect(
  mapStateToProps,
  { setCartId }
)(ProductScreen);
