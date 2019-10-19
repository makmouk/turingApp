import React from "react";
import { Scene, Router } from "react-native-router-flux";
import App from "./screens/App";
import ProductScreen from "./screens/shopScreens/ProductScreen";

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }}>
      <Scene key="root">
        <Scene key="App" component={App} initial hideNavBar />
        <Scene
          key="ProductScreen"
          component={ProductScreen}
          title="ProductScreen"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
