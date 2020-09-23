/* Creator: Muhammad Bokhari
 * Date : 9/22/2020
 * Signin Actions defined in this file 
*/

import firestore from '@react-native-firebase/firestore';

export const getUser = (username) => {
return async function (dispatch) {
    const user = await firestore().collection("users").where('username', '==', username).get();
    
    dispatch({type: "GET USER", payload: user.docs})
    return Promise.resolve();
}
} 