import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

const Input1 = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20
  },
  containerStyle: {
    height: 40,
    flex: 1
  }
});

export default Input1;
