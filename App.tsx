import { StatusBar } from 'expo-status-bar';
import React, { FC, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import ModalComponent from "./components/Modal";



const CPri: string = "#5f9ea0"


const App: FC = () => {
  const [inputText, setInputText] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (text: string) => {
    setInputText(text)
  };

  const handleAddItem = () => {

    setItemList([
      ...itemList,
      {
        id: Math.random().toString(),
        value: inputText,
      },
    ]);
    setInputText('');

  }

  const handleConfirmDelete = () => {
    const id = itemSelected.id;
    setItemList(itemList.filter(item => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  }

  const handleModal = id => {
    setItemSelected(itemList.find(item => item.id === id));
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.header} >EcoTu</Text>
      </View>
      <View style={styles.input}>
        <Ionicons name="md-search" size={32} color="green" />
        <TextInput
          placeholder='Que pais queres visitar'
          onChangeText={handleChangeText}
          value={inputText}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddItem}
        >
          <Text>Agregar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={itemList}
        renderItem={data => {
          return (
            <View style={styles.item}>
              <Text>{data.item.value}</Text>
              <Button

                title="X"
                color="#AAAAAA"
                onPress={() => handleModal(data.item.id)}
              />
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />

      <ModalComponent
        itemSelected={itemSelected}
        handleConfirmDelete={handleConfirmDelete}
        modalVisible={modalVisible}
      />


    </View>



  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  header: {
    backgroundColor: CPri,
    paddingTop: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 30

  },
  h: {
    color: CPri,
    fontWeight: "bold",
    fontSize: 17,
    paddingTop: 20,
    paddingLeft: 10,
    flexDirection: "row",

  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: 'black',
    borderBottomWidth: 1,

  },
  button: {
    marginLeft: 50,
    alignItems: "center",
    backgroundColor: CPri,
    padding: 10,
    borderRadius: 10,
  },
  item: {

    margin: 30,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'white',
  }
});

export default App