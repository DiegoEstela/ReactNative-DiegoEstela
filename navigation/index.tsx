import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from './TabNavigator'

const MainNavigator: FC = () => {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )

}

export default MainNavigator