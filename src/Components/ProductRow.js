import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const ProductRow = ({ product, onPress }) => {
  const { name, discounted_price, price, thumbnail } = product;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailStyleContainer,
    headerTextStyle,
    priceView,
    priceText,
    tabStyle,
    tabTxtStyle
  } = styles;
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <Card>
        <CardSection>
          <View style={thumbnailStyleContainer}>
            <Image style={thumbnailStyle} source={{ uri: thumbnail }} />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{name}</Text>
            <View style={priceView}>
              <Text style={priceText}>{"$" + price}</Text>
              <Text>
                {discounted_price ? "$" + discounted_price : ""}
              </Text>
            </View>
          </View>
          <View style={tabStyle}>
            <Text style={tabTxtStyle}>SALE</Text>
          </View>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  thumbnailStyleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  priceView: {
    flexDirection: "row"
  },
  priceText: {
    marginRight: 10,
    color: "#999999"
  },
  tabStyle: {
    backgroundColor: "#F3B453",
    height: 25,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 0
  },
  tabTxtStyle: {
    fontWeight: "bold",
    color: "#fff"
  }
};

export default ProductRow;
