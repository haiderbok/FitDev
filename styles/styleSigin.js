import { StyleSheet } from 'react-native'


export const style = StyleSheet.create ({

    container : {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'black',
        opacity : 1,
        
    },

    form : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 70,

    },

    item : {
        marginBottom: 40,
        color: 'white',
        borderColor: 'coral'
    },

    input : {
        color: 'white',
        marginLeft: 10,
    },

    image : {
      alignSelf:"center",
      marginTop: 40,
      marginBottom: 30,
      height: 200,
      
    },

    row : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 60,
    },
    
    text : {
        fontSize: 18,
        margin: 20,
        fontWeight: 'bold',
        color: 'white'
    },

    header : {
        backgroundColor: 'coral',
        padding: 0,
        height: 60
    },

    title: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        fontFamily: 'monospace'
    },

    button : {
        backgroundColor : 'coral',
        marginTop: 30,
    },

    buttonText : {
        color: "white",
        fontSize : 18,
        fontWeight: 'bold',
        alignSelf: "center"
    },

})