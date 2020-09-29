import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import Signin from './components/Signin';
// import Home from './components/Home';
import Signup from './components/Signup';
// import SplashScreen from 'react-native-splash-screen'
import Forgotpassword from './components/Forgotpassword'

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {

  // componentDidMount() {
  //   // do stuff while splash screen is shown
  //     // After having done stuff (such as async tasks) hide the splash screen
  //     SplashScreen.hide();
  // }
  render() {
    return (
      <Provider store={store}>
        {/* <Signin /> */}
        {/* <Home></Home> */}
        {/* <Signup></Signup> */}
        <Forgotpassword />
      </Provider>
    );
  }
}

