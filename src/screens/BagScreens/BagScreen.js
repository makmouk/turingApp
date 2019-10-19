import React, { Component } from "react";
import { Text, StyleSheet, View, AsyncStorage, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import { connect } from "react-redux";

import ProductRow from "../../Components/ProductRow";

class BagScreen extends Component {
  constructor(props) {
    super(props);
    this.navigationWillFocusListener = props.navigation.addListener(
      "willFocus",
      () => {
        //this.setState();
        console.log("focused");
        this.setCartId();
      }
    );
  }
  state = { cartId: null, products: null };
  //componentDidMount() {
  //this.setCartId();
  // this.setState({ cartId: this.props.cartId });
  //}
  setCartId = async () => {
    var cartId = await AsyncStorage.getItem("cartId");
    this.setState({ cartId });
    axios
      .get(
        "https://mobilebackend.turing.com/shoppingcart/" + this.state.cartId,
        {
          headers: {
            accept: "application/json"
          }
        }
      )
      .then(response => {
        this.setState({ products: response.data });
        //console.log(response);
      });
  };
  noItem() {
    return (
      <View style={styles.noItemStyle}>
        <View style={styles.noItemBox}>
          <Icon name="shopping-bag" size={30} color="#C7C7C7" />
          <Text style={{ color: "#C7C7C7", marginTop: 5 }}>
            You have no items in your shopping bag.
          </Text>
        </View>
      </View>
    );
  }
  renderProducts() {
    return this.state.products.map(product => (
      <ProductRow
        key={product.item_id}
        product={product}
        //onPress={() => this.props.selectProduct(product)}
      />
    ));
  }
  render() {
    if (this.state.products != null) {
      if (this.state.products[0] == null) {
        return <View style={styles.container}>{this.noItem()}</View>;
      }
      return <ScrollView>{this.renderProducts()}</ScrollView>;
    }
    return <View style={styles.container}>{this.noItem()}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noItemStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  noItemBox: {
    height: 200,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#C7C7C7"
  }
});

const mapStateToProps = state => {
  return { cartId: state.auth.cartId };
};

export default connect(mapStateToProps)(BagScreen);
