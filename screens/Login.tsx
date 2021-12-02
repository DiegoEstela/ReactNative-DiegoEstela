import React, { useState } from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native'
import colors from '../constants/colors'
import { useDispatch } from 'react-redux'
import { UserLogin, UserLogaut } from "../store/slices/user.slice"
import { useSelector } from 'react-redux'





const Login = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.value);

  const [usuario, setUsuario] = useState({
    nombre: "", apellido: "", email: "", contrasena: ""

  });

  const handleChange = (text: string, campo: string) => {
    setUsuario({
      ...usuario,
      [campo]: text
    });
  }

  const handleSubmit = () => {


    dispatch(UserLogin(usuario));
    navigation.navigate("Home")
  }
  const handleLogaut = () => {
    dispatch(UserLogaut());
  }

  return (

    <>

      {(user.nombre) ? <TouchableOpacity onPress={handleLogaut} style={styles.buttonClose}>
        <Text>Cerrar sesion</Text>
      </TouchableOpacity> :

        <View style={styles.login} >
          <TextInput style={styles.input} placeholder="nombre" onChangeText={(text) => handleChange(text, "nombre")} />
          <TextInput style={styles.input} placeholder="Apellido" onChangeText={(text) => handleChange(text, "apellido")} />
          <TextInput style={styles.input} placeholder="Email" onChangeText={(text) => handleChange(text, "email")} />
          <TextInput style={styles.input} placeholder="Contrasena" secureTextEntry={true} onChangeText={(text) => handleChange(text, "contrasena")} />
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonClose}>
            <Text>Registrar</Text>
          </TouchableOpacity>

        </View>
      }

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
  input: {
    backgroundColor: "#e6e6fa",
    padding: 5,
    borderRadius: 5,
    marginBottom: 15,

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