import React, { FC } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';


import Maps from '../screens/Maps';
import Search from '../screens/Search';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

const AppNavigator: FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.header,
                headerTintColor: Platform.OS === 'android' ? "white" : colors.primary
            }}
            initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />

            <Stack.Screen
                name="Maps"
                component={Maps}

            />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : colors.accents,
    }
})

export default AppNavigator;