import React from 'react';
import { Text, View } from 'react-native';
import languagekeys from '../localization/languagekeys';
import LanguageUtils from '../localization/LanguageUtils';

const Home = () => {
    return (
        <View>
            <Text style={{ color: "black" }}>{LanguageUtils.getLangText(languagekeys.helloeveryone)}</Text>
            <Text style={{ color: "black", marginTop: 20 }}>{LanguageUtils.getLangText(languagekeys.demomultisupport)}</Text>
        </View>
    )
}

export default Home;
