import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import colors from '../constants/colors'
import Searchcomponent from './Search'




const Login = () => {

  const [usuario, setUsuario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',

  });
  const [usuarioConfirmed, setUsuarioConfirmed] = useState("");

  const handleChange = (text: string, campo: string) => {
    setUsuario({
      ...usuario,
      [campo]: text
    });
  }

  const handleSubmit = () => {

    setUsuarioConfirmed(usuario);
    console.log(usuarioConfirmed);

  }
  const confirmedOutput = usuarioConfirmed ? <Searchcomponent /> : (
    <View style={styles.login} >
      <TextInput placeholder="Nombre" onChangeText={(text) => handleChange(text, "nombre")} value='' />
      <TextInput placeholder="Apellido" onChangeText={(text) => handleChange(text, "apellido")} />
      <TextInput placeholder="Email" onChangeText={(text) => handleChange(text, "email")} />
      <TextInput placeholder="Contrasena" secureTextEntry={true} onChangeText={(text) => handleChange(text, "contrasena")} />

    </View>
  );


  return (
    <>
      {confirmedOutput}
      {usuarioConfirmed ? (<TouchableOpacity
        style={styles.buttonClose}
        onPress={() => setUsuarioConfirmed("")}

      >
        <Text>Cerrar Sesion</Text>
      </TouchableOpacity>) : (
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonClose}>
          <Text>Registrar</Text>
        </TouchableOpacity>)}

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