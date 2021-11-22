import React, { FC } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";


const Home: FC = ({ navigation, route }) => {

    return (
        <View style={styles.container}>
            <Text>Bienvenido a Eco tu</Text>
            <Button title="Logearse" onPress={() => navigation.navigate("Login")} color={colors.accents} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default Home;