 
/* Creator: Muhammad Bokhari
 * Date : 9/20/2020
 * Actions for the sign up page defined here 
*/

// Action to add the user into the firestore
export const addUser = (user) => {
    return {
        type : 'ADD USER',
        user : user
    }
}

