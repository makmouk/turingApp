import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";

import { selectProduct, fetchProducts } from "../../../actions";
import ProductRow from "../../../Components/ProductRow";

export class Jeans extends Component {
  componentWillMount() {
    this.props.fetchProducts(this.props.fetchId);
  }
  renderProducts() {
    return this.props.products.map(product => (
      <ProductRow
        key={product.product_id}
        product={product}
        onPress={() => this.props.selectProduct(product)}
      />
    ));
  }
  render() {
    return <ScrollView>{this.renderProducts()}</ScrollView>;
  }
}

const mapStateToProps = state => {
  return { products: state.auth.products, fetchId: state.auth.fetchId };
};

export default connect(
  mapStateToProps,
  { selectProduct, fetchProducts }
)(Jeans);
