import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import MapView from "react-native-maps";


export class StoresScreen extends Component {
  render() {
    const { height, width } = Dimensions.get('window');
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ width, height }}>
          
        </MapView>
      </View>
    );
  }
}

export default StoresScreen;
