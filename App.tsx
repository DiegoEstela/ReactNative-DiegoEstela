
import React, { FC } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import MainNavigator from './navigation';







const App: FC = () => {
  const [loaded] = useFonts({
    roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) return <AppLoading />;
  return (

    <View style={styles.container}>
      <Header title="EcoTu" />
      <MainNavigator />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App