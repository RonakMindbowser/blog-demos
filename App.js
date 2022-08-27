import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';
import LanguageUtils from './src/localization/LanguageUtils';
import AppContainer from './src/navigator/AppNavigator';

const App = () => {
  useEffect(() => {
    // LanguageUtils.setAppLangaugeFromDeviceStorage()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <AppContainer />
    </View>
  )
};

export default App;
