import React from 'react'
import { Text, StyleSheet, View, TextInput, Button } from 'react-native'

const Login = () =>  {
    
        return (
            <View style={styles.login} >
                <TextInput placeholder="Nombre"/>
                <TextInput placeholder="Apellido"/>
                <TextInput placeholder="Email"/>
                <Button title="Ingresar"/>
            </View>
        )
    
    }


const styles = StyleSheet.create({
    
  login: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    

  }
});

export default Login;