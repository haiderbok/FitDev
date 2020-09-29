import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Alert} from 'react-native';
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const theme = {
  dark: false,
  roundness: 4,
  colors: {
          primary: '#1eaaf1',
          accent: '#005cf1',
          background: '#ffffff',
          surface: '#ffffff',
          error: '#B00020',
          text: '#000000',
          disabled: '#000000',
          placeholder: '#1eaaf1',
          backdrop: '#d20022',
          notification: '#e46eef',
  },
  fonts : {
          regular: 'HelveticaNeue',
          medium: 'HelveticaNeue-Medium',
          light: 'HelveticaNeue-Light',
          thin: 'HelveticaNeue-Thin',
  },
  animation: {
    scale: 1.0,
  },
}

class Signup extends Component {
  constructor() {
    super();
    this.state = { email : "", password : "", confirmPassword : "", fname : "", lname: "" };
  }

  handleSignUp = () => {

    if (this.state.fname == "") {
      Alert.alert(
          'First Name field error',
          'First Name is empty',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
        return;
    }
    else if (this.state.lname == "") {
      Alert.alert(
          'Last Name field error',
          'Last Name is empty',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
        return;
    }
    else if(this.state.email == "") {
      Alert.alert(
        'Email field error',
        'Email is empty',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      );
      return;
    }
    else if (this.state.password == "") {
      Alert.alert(
          'Password field error',
          'Password is empty',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
        return;
    }
    else if (this.state.confirmPassword == "") {
      Alert.alert(
          'Confirm password field error',
          'Confirm Password is empty',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
        return;
    }
    else if (this.state.password != this.state.confirmPassword) {
      Alert.alert(
          'Passwords dont match',
          'Make sure your passwords match',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
        return;
    }

    auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((userCredentials) => {
      firestore()
        .collection('users')
        .doc(userCredentials.user.uid)
        .set({
          uid: userCredentials.user.uid,
          fname: this.state.fname,
          lname: this.state.lname,
          email: this.state.email
        })
        .then(() => {
          Alert.alert(
            'Successfully signed up user!',
            'User has been successfully signed up',
            [
              { text: 'OK' },
            ],
            { cancelable: false }
          );
          this.setState({
            fname: "",
            lname: "",
            email: "",
            password: "",
            confirmPassword: ""
          })
        })
        .catch(error => {
          Alert.alert(
            'Error',
            error.message,
            [
              { text: 'OK' },
            ],
            { cancelable: false }
          );
        })
        
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert(
          'Email already in use',
          'Please use another email to signup',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
      }
      else if (error.code === 'auth/invalid-email') {
        Alert.alert(
          'Email address field error',
          'You entered an incorrect email format',
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
      }
      else {
        console.error(error);
        Alert.alert(
          'Error',
          error.message,
          [
            { text: 'OK' },
          ],
          { cancelable: false }
        );
      }
    });


  }

  render() {
    return (
      <PaperProvider theme={theme}>
        <ScrollView style={styles.container}>
        <TextInput
            style={{ marginTop:30, marginLeft: 10, marginRight:10, flex: 8, height: 45}}
            label='First Name'
            mode='outlined'
            multiline
            blurOnSubmit
            autoCapitalize="none"
            onChangeText={fname => this.setState({ fname })}
            value={this.state.fname}
        />

        <TextInput
            style={{ margin:10, flex: 50, height: 45 }}
            label='Last Name'
            mode='outlined'
            multiline
            blurOnSubmit
            autoCapitalize="none"
            onChangeText={lname => this.setState({ lname })}
            value={this.state.lname}
        />

        <TextInput
            style={{ margin:10, flex: 50, height: 45}}
            label='Email Address'
            mode='outlined'
            multiline
            blurOnSubmit
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
        />

        <TextInput
            style={{ margin:10, flex: 50, height: 45}}
            label='Password'
            mode='outlined'
            blurOnSubmit
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
        />

        <TextInput
            style={{ margin:10, flex: 50, height: 45}}
            label='Confirm Password'
            mode='outlined'
            blurOnSubmit
            secureTextEntry
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
        />
        

        <Button style={{margin: 10, justifyContent: 'center', flex: 5, borderColor: '#1eaaf1', marginBottom: 3, backgroundColor: '#1eaaf1' }} onPress={this.handleSignUp}>
            <Text style={{textAlign: 'center', fontSize: 20, margin: 3, fontWeight: 'bold', color: 'white' }}>
                Sign up!
            </Text>
        </Button>


        </ScrollView>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default Signup;