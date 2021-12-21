import React, { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';

import colors from '../constants/colors';

import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import PlaceListScreen from "../screens/PlaceListScreen";

const PlaceStack = createNativeStackNavigator()

const PlaceNavigator = () => (
    <PlaceStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? colors.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? "white" : colors.primary
        }}
        initialRouteName='Place'>
        <PlaceStack.Screen
            name="Direcciones"
            component={PlaceListScreen}

        />
        <PlaceStack.Screen
            name="Detalle"
            component={PlaceDetailScreen}

        />
        <PlaceStack.Screen
            name="Nuevo"
            component={NewPlaceScreen}

        />
        <PlaceStack.Screen
            name="Map"
            component={MapScreen}

        />
    </PlaceStack.Navigator>
)


export default PlaceNavigator