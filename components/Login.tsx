import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, TouchableOpacity, Text } from 'react-native'
import colors from '../constants/colors'
import Searchcomponent from '../screens/Search'

const Login = () => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(false);
  }

  const confirmedOutput = confirmed ? (
    <View style={styles.login} >
      <TextInput placeholder="Nombre" />
      <TextInput placeholder="Apellido" />
      <TextInput placeholder="Email" />
      <Button title="Ingresar" color={colors.accents} onPress={handleConfirm} />
    </View>
  ) : <Searchcomponent />;


  return (
    <>
      {confirmedOutput}
      <TouchableOpacity
        style={styles.buttonClose}
        onPress={() => setConfirmed(true)}
      >
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>
    </>
  )

}


const styles = StyleSheet.create({

  login: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,


  },
  buttonClose: {
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    color: 'white',

  },
});

export default Login;