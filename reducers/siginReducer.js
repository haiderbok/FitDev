/* Creator: Muhammad Bokhari
 * Date : 9/22/2020
 * Signin Reucer defined in this file 
*/
const intiState = {
    user: [

    ]
}

const signinReducer = (state = intiState, action) => {

    switch(action.type) {
        case  "GET USER":
            // console.log ("in action", action.payload[0]._data);
            return {
                ...state,
                user : action.payload[0]._data 
            }
        default:
            return state;

    }
}

export default signinReducer;