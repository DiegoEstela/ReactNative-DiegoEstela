import { StatusBar } from 'expo-status-bar';
import React, {FC} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Input from "./components/Input"


const CPri : string = "#5f9ea0"


const App: FC = () => {


  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <View>
        <Text style={styles.header} >EcoTu</Text> 
      </View>
      <View>
         <Input icon="md-search" placeholder="Que pais queres conocer?"/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
    header :{
    backgroundColor: CPri,
    paddingTop: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30
  },
    h : {
    color: CPri,
    fontWeight: "bold",
    fontSize: 17,
    paddingTop: 20,
    paddingLeft: 10,
    flexDirection: "row"

  }
});

export default App