import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";


const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        paddingTop: 40,
        textAlign: "center",
        color: "white",

    },
    headerTitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        paddingTop: 15,
        paddingBottom: 15,
        fontFamily: "roboto",
        textAlign: "center",
        flexDirection: "row",
    },
});

export default Header;


