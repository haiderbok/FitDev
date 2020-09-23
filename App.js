import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import SignUp from './components/Signup'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';
import Signin from './components/Signin';






const store = createStore(rootReducer,applyMiddleware(thunk));


export default function App() {
  
  return (
    <Provider store={store}>
      <Signin />
    </Provider>
  );
}


