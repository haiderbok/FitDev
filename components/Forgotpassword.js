import React, { Component } from 'react';
import auth from '@react-native-firebase/auth';
import { Text, ScrollView, StyleSheet } from 'react-native'
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper';
import { theme, styles } from '../styles/styleForgotpassword'



class Forgotpassword extends Component {

    constructor () {
        super();
        this.state = {
            email: '',
        }
    }

    onPress = () => {
        auth().sendPasswordResetEmail(this.state.email).catch( error => {
            console.log(error.message);
        });
        console.log("Here");
    }

    render() {
        return(
            <PaperProvider theme={theme}>
            <ScrollView style={styles.container}>
            <TextInput
                style={styles.text}
                label='Enter your Email address'
                mode='outlined'
                multiline
                blurOnSubmit
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
            />
    
            
    
            <Button style={styles.button} onPress={() => this.onPress()}>
                <Text style={styles.buttontext}>
                    Send
                </Text>
            </Button>
    
    
            </ScrollView>
          </PaperProvider>
        )
        
    }
    

}


export default Forgotpassword;