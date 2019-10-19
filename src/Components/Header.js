import React from "react";
import { Text, View } from "react-native";

const Header = ({ headerText, backgroundColor }) => {
  const { headerTextStyle, underHeaderText, viewStyle } = styles;

  return (
    <View style={[viewStyle, { backgroundColor }]}>
      <Text style={headerTextStyle}>{headerText}</Text>
      <Text style={underHeaderText}>OUTWEAR</Text>
    </View>
  );
};
const styles = {
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    paddingTop: 5,
    position: "relative"
  },
  headerTextStyle: {
    fontSize: 50,
    color: "#fff"
  },
  underHeaderText: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 10
  }
};

export default Header;
