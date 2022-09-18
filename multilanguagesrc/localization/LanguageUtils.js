import * as RNLocalize from "react-native-localize";
import StorageService from "../utils/StorageService";

import en from "./en";
import gj from "./gj";
import hin from "./hin";

// http://www.lingoes.net/en/translator/langcode.htm

/**
 * Language Localization class 
 */
export default class LanguageUtils {
    /**
     * list of all languages which we wan to apply in app
     */
    static languages = {
        english: "english",
        gujarati: "gujarati",
        hindi: "hindi",
    }

    /**
     * @const for change language globally
     */
    static changeLanguageGlobal = "CHANGE_LANGUAGE_GLOBAL"

    /**
     * list of locales for all languages
     */
    static indianLocales = ['en', "gu-IN", "hi-IN"]

    /**
     * @returns current selected language in app.
     */
    static currentAppLanguage = this.setAppLangaugeFromDeviceLocale(true);

    /**
     * @param {*} needToGetLang 
     * set the default language from device locales  
     */
    static setAppLangaugeFromDeviceLocale(needToGetLang) {
        let deviceLocale = RNLocalize.findBestAvailableLanguage(this.indianLocales);

        const languageTag = deviceLocale?.languageTag || "en"

        const isGujDetected = this.indianLocales.find((locale) => 'gu-IN' === languageTag);
        const isHinDetected = this.indianLocales.find((locale) => 'hi-IN' === languageTag);

        const language = isGujDetected
            ? this.languages.gujarati
            : isHinDetected
                ? this.languages.hindi
                : this.languages.english;

        if (needToGetLang) {
            return language;
        }

        this.setAppLangauge(language);
    }

    /**
     * set the language from device local storage 
     * App will select language from local storage and will set as Default language for app.
     * if language not found from storage then will select from device locales.
     */
    static async setAppLangaugeFromDeviceStorage() {
        const language = await StorageService.getItem(StorageService.APP_LANGUAGE);
        console.log("language", language);
        if (language) {
            this.setAppLangauge(language);
        } else {
            this.setAppLangaugeFromDeviceLocale();
        }
    }

    /**
     * 
     * @param {*} language 
     * sets the app language in app
     */
    static async setAppLangauge(language) {
        this.currentAppLanguage = language;
        await StorageService.saveItem(StorageService.APP_LANGUAGE, language);
    }

    /**
     * 
     * @param {*} key 
     * @returns the string value of key in selected language
     */
    static getLangText(key) {
        if (this.currentAppLanguage === this.languages.gujarati) {
            return gj[key];
        }
        if (this.currentAppLanguage === this.languages.hindi) {
            return hin[key];
        }

        return en[key];
    }
}