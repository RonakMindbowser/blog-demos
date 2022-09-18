import React from 'react';
import { Button, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AppContainer from './multilanguagesrc/navigator/AppNavigator';

const Stack = createStackNavigator();

const DemoScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button title='MultiLanguageDemo' onPress={() => navigation.navigate('AppContainer')} />
        </View>
    )
}

const DemoNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='DemoScreen' component={DemoScreen} options={{ headerShown: false }} />
                <Stack.Screen name='AppContainer' component={AppContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default DemoNavigation;
