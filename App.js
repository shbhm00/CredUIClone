import React from 'react';
import {View} from 'react-native';
import Route from './src/route';
import SplashScreen from './src/screens/splashScreen';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <Route />
    </View>
  );
}
