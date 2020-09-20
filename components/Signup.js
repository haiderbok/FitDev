/* Creator: Muhammad Bokhari
 * Date : 9/20/2020
 * Sign up page 
*/
import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Container, Header, Content, Form, Item, Input, Title, Button } from 'native-base';
import {connect} from 'react-redux';
import {addUser} from '../actions/signupActions';

class SignUp extends Component  {
    constructor() {
        super();
        this.state = {
          isReady: false,
          last_name :"" ,
          first_name: "",
          email:"",
          password: "",
          re_password: ""
        };
      }

    /* Fields validation for the sign up page ----- in Progress ----- */
     feildValidation =  () =>  {

        const values = Object.values(this.state);
        values.forEach(function (item,index){
              console.log (index, item);
                
            if (!item) {
                str =  "Error" + item + "is empty. Please fill it out";
                return str;
            }

            if (this.state.re_password.localeCompare(this.state.password) != 0) {
                str = "Error: The passwords do not match";
            }

        });
    }
    /* Function that handles submitting of sign up form */
       onPress = (e) => {
        this.props.addUser(this.state);
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
        if (this.state.isReady) {
            return (
                <Container >
                    <Header > 
                    <Title>Signup</Title>
                    </Header>
                    <Content>
                    <Form style= {styles.form}>
                        <Item style={styles.item}>
                        <Input id = "last_name" onChangeText={(text) => this.setState({last_name: text})} placeholder="Last Name" />
                        </Item>
                        <Item style={styles.item}>
                        <Input id = "first_name" onChangeText={(text) => this.setState({first_name: text})} placeholder="First Name" />
                        </Item>
                        <Item style={styles.item}>
                        <Input id = "email" onChangeText={(text) => this.setState({email: text})} placeholder="Email" />
                        </Item>
                        <Item style={styles.item}>
                        <Input id = "password" onChangeText={(text) => this.setState({password: text})} placeholder="Password" />
                        </Item>
                        <Item style={styles.item} >
                        <Input id = "re-password" onChangeText={(text) => this.setState({re_password: text})} placeholder="Re enter Password" />
                        </Item>
                    </Form>
                    </Content>
                    <Button onPress={this.onPress} style={styles.button}><Text style={styles.text}>Submit</Text></Button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addUser : (user) => dispatch(addUser(user)),
    }  
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);