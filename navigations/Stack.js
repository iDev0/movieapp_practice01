import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import Tabs from './Tabs'

const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor : 'white',
                headerBackTitleVisible : false,
                headerStyle : {
                    backgroundColor : 'black',
                    borderBottomWidth : 3,
                }
            }}        
        >
            <Stack.Screen name='Tabs' component={Tabs} />
        </Stack.Navigator>
    )
}
