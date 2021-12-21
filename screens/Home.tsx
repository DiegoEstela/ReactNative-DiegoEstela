import React, { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";



const Home: FC = ({ navigation, route }) => {

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.cartHome} onPress={() => navigation.navigate("Maps")}>
                <Text style={styles.cartText} > Map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartHome} onPress={() => navigation.navigate("Search")}>
                <Text style={styles.cartText} > Tu lista</Text>
            </TouchableOpacity>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 30,
        flexDirection: "column",
        justifyContent: "space-around",


    },
    cartHome: {
        backgroundColor: colors.accents,
        borderRadius: 10,
        height: "30%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    cartHomeUser: {
        backgroundColor: "white",
        borderRadius: 10,
        height: "30%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    cartText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        fontFamily: "roboto",

    }
});
export default Home;