import { Scene, Router } from 'react-native-router-flux';
import React from 'react';


import Splash from './components/Splash';
import Login from './components/LoginForm';
import Chat from './components/Chat';

const Routes = () => {
    return (
      <Router sceneStyle={{ paddingTop: 0 }}>
        <Scene key="root" hideNavBar>
            <Scene key="Splash" component={Splash} initial hideNavBar/>
            <Scene
              key="Login"
              component={Login}
              hideNavBar
            />
            <Scene key="Chat" component={Chat} hideNavBar/>
        </Scene>
      </Router>
    );
  };


export default Routes;
