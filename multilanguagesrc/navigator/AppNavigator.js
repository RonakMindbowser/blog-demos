import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RNRestart from 'react-native-restart'; // Import package from node modules
import { EventRegister } from "react-native-event-listeners";

import Home from "../screens/Home";
import Setting from "../screens/Setting";
import LanguageUtils from "../localization/LanguageUtils";
import languagekeys from "../localization/languagekeys";

const Tab = createBottomTabNavigator();

function AppContainer() {
    const [isReady, setisReady] = useState(false)
    useEffect(() => {
        LanguageUtils.setAppLangaugeFromDeviceStorage().then(() => {
            setisReady(true)
        }).catch(() => {
            setisReady(true)
        })
    }, [])

    useEffect(() => {
        const listener = EventRegister.addEventListener(LanguageUtils.changeLanguageGlobal, (language) => {
            LanguageUtils.setAppLangauge(language).then(() => {
                RNRestart.Restart();
            }).catch(() => {
                console.log("error");
            })
        })
        return () => {
            EventRegister.removeEventListener(listener)
        }
    }, [])

    if (isReady) {
        return (
            // <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarIcon: () => null
            }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Setting" component={Setting} options={{
                    headerTitle: LanguageUtils.getLangText(languagekeys.changeLanguage)
                }} />
            </Tab.Navigator>
            // </NavigationContainer>
        )
    }
    else {
        return null;
    }


}

export default AppContainer;