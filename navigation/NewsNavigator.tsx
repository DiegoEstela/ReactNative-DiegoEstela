import React, { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator()

const NewsNavigator: FC = () => {
    return (
        <View>
            <Text>News</Text>

        </View>
    )
}

export default NewsNavigator