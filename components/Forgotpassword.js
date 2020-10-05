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
            error: '',
        }
    }

    onPress = () => {

        if (this.state.email === '') {
            this.setState({ error :'Must enter a valid email'});
            return;
        }
        
        auth().sendPasswordResetEmail(this.state.email).then(() => {

        }).catch( error => {
            console.log(error);
            console.log(error.message);
        });

        // let code = 'uDa5nwWaBZ8oplMTGtsCDenE7Axbw0NqcXTzevy8zzwAAAF04JeCJw&apiKey=AIzaSyCvuYVCSl7P55zpaqHa3SU9HRnTh88Gn3k';

        // auth().verifyPasswordResetCode(code)
        // .then(function(email) {
        // // Display a "new password" form with the user's email address
        //     <Text>Here</Text>
        // })
        // .catch(function(error) {
        // // Invalid code
        //     console.log(error.message);
        // })
    }

    render() {
        return(
            <PaperProvider theme={theme}>
            <ScrollView style={styles.container}>
            <Text style={styles.error}>{this.state.error}</Text>
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