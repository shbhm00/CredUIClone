import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import Onboarding from './screens/enterDetails';
import OTP from '../src/screens/otpscreen';
import SplashScreen from '../src/screens/splashScreen';
import Permission from '../src/screens/permission';
const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Permission"
          component={Permission}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
