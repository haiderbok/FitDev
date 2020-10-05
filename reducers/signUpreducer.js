/* Creator: Muhammad Bokhari
 * Date : 9/20/2020
 * Reducres for the sign up page defined here 
*/

import firestore from '@react-native-firebase/firestore';

const initialState =  {
    users : [
    {name : "Haider"}, {name : "mihir"}
    ]
}


const SignUpreducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD USER' :
            console.log ('User addeds', action.type, action.user.first_name);
              firestore().collection("users").add({
                  last_name : action.user.last_name,
                  first_name: action.user.first_name,
                  email: action.user.email.trim(),
                  password: action.user.password,
              })
              return state
        default:
            return state;
    }
    
}

export default SignUpreducer;