import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Wishlist from '../Screen/Wishlist';
import CharacterDetails from '../Screen/CharacterDetails';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }} initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
                <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppContainer;