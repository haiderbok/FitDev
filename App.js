import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {createStore, applyMiddleware, compose} from 'redux';
import SignUp from './components/Signup'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk';





const store = createStore(rootReducer,
  applyMiddleware(thunk));

//console.log(query)

export default function App() {
  
  return (
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
