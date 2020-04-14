import React, {useLayoutEffect} from 'react'
import { View, Text, Platform } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import Fav from '../screens/Fav'
import Movies from '../Movies'
import Search from '../screens/Search'
import TV from '../screens/TV'

const Tabs = createBottomTabNavigator()

const getHeaderName = route => 
    route?.state?.routeNames[route.state.index] || 'Movies'


export default ({route, navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title : getHeaderName(route)
        })
    }, [route])

    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon : ({focused}) => {
                    let iconName = Platform.OS === 'ios' ? 'ios-' : 'md'

                    if (route.name === 'Movies') {
                        iconName += 'film'
                    } else if (route.name === 'Fav') {
                        iconName += 'heart'
                    } else if (route.name === 'TV') {
                        iconName += 'tv'
                    } else if (route.name === 'Search') {
                        iconName += 'search'
                    }

                    return (
                        <Ionicons name={iconName} size={26} color={focused ? 'white' : 'gray'}/>
                    )
                }
            })}

            tabBarOptions={{
                showLabels : true,
                style : {
                    backgroundColor : 'black',
                    borderTopColor : 'black'
                }
            }}
        >
            <Tabs.Screen name='Movies' component={Movies}/>
            <Tabs.Screen name='Fav' component={Fav}/>
            <Tabs.Screen name='TV' component={TV}/>
            <Tabs.Screen name='Search' component={Search}/>
        </Tabs.Navigator>
    )
}

