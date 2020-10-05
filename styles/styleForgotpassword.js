import { StyleSheet } from 'react-native';

export const theme = {
    dark: false,
    roundness: 4,
    colors: {
            primary: '#1eaaf1',
            accent: '#005cf1',
            background: '#ffffff',
            surface: '#ffffff',
            error: '#B00020',
            text: '#000000',
            disabled: '#000000',
            placeholder: '#1eaaf1',
            backdrop: '#d20022',
            notification: '#e46eef',
    },
    fonts : {
            regular: 'HelveticaNeue',
            medium: 'HelveticaNeue-Medium',
            light: 'HelveticaNeue-Light',
            thin: 'HelveticaNeue-Thin',
    },
    animation: {
      scale: 1.0,
    },
  }

  export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },

    text : {
        marginTop:50,
        marginLeft: 10, 
        marginRight:10, 
        flex: 8,
        height: 45
    },

    button : {
        margin: 10, 
        justifyContent: 'center', 
        flex: 5, 
        borderColor: '#1eaaf1', 
        marginBottom: 3, 
        backgroundColor: '#1eaaf1'
    },

    buttontext : {
        textAlign: 'center',
        fontSize: 20,
        margin: 3, 
        fontWeight: 'bold',
        color: 'white' 
    },

    error: {
      textAlign: 'center',
      fontSize: 24,
      marginTop: 250,
      color: 'red',
    },
  });