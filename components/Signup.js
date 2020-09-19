import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';

import * as Font from 'expo-font';
import { Container, Header, Content, Form, Item, Input, Title, Button } from 'native-base';
import {connect} from 'react-redux';

class SignUp extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          isReady: false,
        };
      }
    
      async componentDidMount() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        this.setState({ isReady: true });
      }
    

    render () {

        console.log(this.props)

        if (this.state.isReady) {
            return (
                <Container >
                    <Header > 
                    <Title>Signup</Title>
                    </Header>
                    <Content>
                    <Form style= {styles.form}>
                        <Item style={styles.item}>
                        <Input placeholder="Last Name" />
                        </Item>
                        <Item style={styles.item}>
                        <Input placeholder="First Name" />
                        </Item>
                        <Item style={styles.item}>
                        <Input placeholder="Email" />
                        </Item>
                        <Item style={styles.item}>
                        <Input placeholder="Password" />
                        </Item>
                        <Item style={styles.item} >
                        <Input placeholder="Re enter Password" />
                        </Item>
                    </Form>
                    </Content>
                    <Button style={styles.button}><Text style={styles.text}>Submit</Text></Button>
                </Container> 

            );
        } else {
            return(
                <AppLoading/>
            );
        }
    }

}

// Style sheet

const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },

    form : {
        marginTop: 150,
    },
    item : {
        padding: 10,
    },
    button : {
        marginLeft: 140,
        marginBottom: 120,
        width: 140
    },
    text : {
        textAlign: "center",
        marginLeft: 45
    }
})

const mapStateToProps = (state) => {
    return {
        users: state.signup.users
    }
}
export default connect(mapStateToProps)(SignUp);