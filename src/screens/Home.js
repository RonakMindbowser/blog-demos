import React from 'react';
import { Text, View } from 'react-native';
import languagekeys from '../localization/languagekeys';
import LanguageUtils from '../localization/LanguageUtils';

const Home = () => {
    return (
        <View>
            <Text style={{ color: "black" }}>{LanguageUtils.getLangText(languagekeys.hello)}</Text>
            <Text style={{ color: "black", marginTop: 20 }}>{LanguageUtils.getLangText(languagekeys.profile)}</Text>
        </View>
    )
}

export default Home;
