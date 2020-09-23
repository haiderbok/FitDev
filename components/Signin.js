/* Creator: Muhammad Bokhari
 * Date : 9/22/2020
 * Sign in page 
*/
import React, {Component} from 'react';
import {Text, View, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Title, Icon } from 'native-base';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { getUser } from '../actions/siginAction'
import { style } from '../styles/styleSigin';
import logo from '../constants/profilepictureholder.png'

class Signin extends Component {

    constructor () {
        super ();
        this.state = {
            username : '',
            password : '',
            isReady: true,
            wronginfo : false,
            rightinfo : false,
            iconname : '',
        }
    }

     onPress = () => {
        // this.setState({iconname : '', wronginfo:false, rightinfo: false});
         this.props.getUser(this.state.username).then(
             () => {
                 console.log("here", this.props.user);
                 if (this.state.password != this.props.user.password) {
                    this.setState({ wronginfo : true, rightinfo: false, iconname: 'close-circle', username: '', password: '' });
                    return;
                 }

                 //Route to the home page -- missing --
                this.setState({rightinfo: true, wronginfo: false, iconname: 'ios-checkmark-circle'});
             }
         ).catch(
             () => 
             { 
                 console.log("error could not get the name");
                 this.setState({ wronginfo : true, rightinfo: false, iconname: 'close-circle', username: '', password: ''  });
             }
            ); 
        
    }

    render () {
        return (
                  <Container style = {style.container}>
                

                     <Header style={style.header}>
                     <Title style= {style.title}>Fit</Title> 
                    </Header>   
                    
                    
                    <Content>
                    <Image style={style.image} source={logo}/>

                    <Form style={style.form} >
                        <Item style={style.item}  rounded  error= {this.state.wronginfo} success={this.state.rightinfo} >

                        <Input style={style.input} value={this.state.username} placeholder="Username" onChangeText={(text) => this.setState({username : text})} />
                        
                        <Icon name={this.state.iconname}/>
                        </Item>
                        <Item style={style.item} rounded error = {this.state.wronginfo} success={this.state.rightinfo} >
                        <Input style={style.input} value={this.state.password} placeholder="Password" onChangeText={(text) => this.setState({password : text})} />
                        <Icon name={this.state.iconname}/>
                        </Item>
                    </Form>
                     <Button style={style.button} rounded block onPress = {this.onPress}><Text style={style.buttonText}>Login</Text></Button>
                     <View style={style.row}>  
                        
                     <Text style={style.text}>Register</Text> 
                     <Text style={style.text}>Forgot Password?</Text>
                     
                     </View>
                    </Content>
                </Container>
        );
    }
}

const mapStateToProps =  (state) => {
    return {
        user : state.signin.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser : (email) => dispatch (getUser(email)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin);