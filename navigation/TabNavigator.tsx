import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppNavigator from "./AppNavigator";
import UserNavigator from "./UserNavigator";
import NewsNavigator from "./NewsNavigator";
import colors from "../constants/colors";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const BottomTabs = createBottomTabNavigator()

const TabNavigator: FC = () => {
    return (
        <BottomTabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarShowLabel: false,
        }}>
            <BottomTabs.Screen
                name={"Map"}
                component={AppNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Fontisto name="world-o" size={24} color={focused ? colors.accents : colors.primary} />
                        </View>
                    )
                }} />
            <BottomTabs.Screen
                name={"News"}
                component={NewsNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Ionicons name="md-newspaper" size={24} color={focused ? colors.accents : colors.primary} />
                        </View>
                    )
                }} />

            <BottomTabs.Screen
                name={"User"}
                component={UserNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome name="user" size={28} color={focused ? colors.accents : colors.primary} />
                        </View>
                    )
                }} />
        </BottomTabs.Navigator>
    )

}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 80,

    }
})