import React, { Component } from "react";
import { StyleSheet, YellowBox, Text } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import reducers from "./src/reducers";
import Routes from "./src/Routes";

export default class App extends Component {
  constructor() {
    super();
    YellowBox.ignoreWarnings(["Setting a timer"]);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
