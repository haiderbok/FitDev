import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {createStore} from 'redux';
import SignUp from './components/Signup'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

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
