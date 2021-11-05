import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";


interface Props{
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}


const Input: FC<Props> = (props) => {

    return(
        <View style={styles.container}> 
            <View> 
                <Ionicons name={props.icon} size={32} color="green"/>
            </View>
            <View>
                <TextInput style={styles.input} placeholder={props.placeholder} onChangeText={props.onChangeText}/>
            </View>
        </View>

    )


}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    input: {
        
        paddingTop: 4,
        justifyContent: "center",
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 20
        
    }
})

export default Input