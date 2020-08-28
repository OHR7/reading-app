import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './screens/Home'
import BookDetail from './screens/BookDetail'
import { color } from 'react-native-reanimated'


const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{header: () => null}}
                />
                <Stack.Screen
                    name='BookDetail'
                    component={BookDetail}
                    options={{
                        title: '',
                        headerBackTitle: ' ',
                        headerTintColor: 'black'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes

