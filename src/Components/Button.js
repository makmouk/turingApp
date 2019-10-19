import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 24,
    fontWeight: "600",
    paddingBottom: 10,
    paddingTop: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});

export { Button };
