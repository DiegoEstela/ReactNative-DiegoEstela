import React, { FC } from 'react'
import { TextInput, TouchableOpacity, Text, View, StyleSheet } from 'react-native'

import colors from '../constants/colors';


const SearchMaps: FC = () => {

    return (
        <View style={styles.container}>
            <View style={styles.input}>

                <TextInput
                    placeholder='Que pais queres visitar'
                />


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    input: {
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        width: "70%",
        marginRight: "10%",


    },
    button: {
        marginLeft: 50,
        alignItems: "center",
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 10,
    }
});


export default SearchMaps