import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import languagekeys from '../localization/languagekeys';
import LanguageUtils from '../localization/LanguageUtils';

const Setting = () => {

    const [languageList, setList] = useState([
        {
            key: 'english',
            title: "English",
        },
        {
            key: 'gujarati',
            title: "ગુજરાતી",
        },
        {
            key: 'hindi',
            title: "हिन्दी",
        },
    ])

    const [selectedLanguage, setSelectedLanguage] = useState()

    useEffect(() => {
        setSelectedLanguage(LanguageUtils.currentAppLanguage)
    }, [])

    const renderListItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{
                marginVertical: 7,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20
            }}
                onPress={() => setSelectedLanguage(item.key)}
            >
                <Text
                    style={{
                        color: "black",
                        textTransform: "capitalize",
                    }}
                >{item.title
                    }</Text>
                <View style={{ height: 20, width: 20, borderWidth: 2, borderRadius: 50, alignItems: "center", justifyContent: "center" }}>
                    {
                        item.key == selectedLanguage ? <View style={{ height: 10, width: 10, backgroundColor: "black", borderRadius: 40 }} /> : null
                    }
                </View>
            </TouchableOpacity>
        )
    }

    const onClickSubmit = () => {
        EventRegister.emit(LanguageUtils.changeLanguageGlobal, selectedLanguage)
    }

    return (
        <View>
            <Text style={{ color: "black" }}>{LanguageUtils.getLangText(languagekeys.youcanchange)}</Text>

            <FlatList
                data={languageList}
                renderItem={renderListItem}
                contentContainerStyle={{ flexGrow: 1, paddingVertical: 30 }}
            />

            <Button
                title={LanguageUtils.getLangText(languagekeys.submit)}
                onPress={onClickSubmit}
            />
        </View>
    )
}

export default Setting;
