import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import Onboarding from './screens/enterDetails';
import OTP from '../src/screens/otpscreen';
import SplashScreen from '../src/screens/splashScreen';
import Credit from '../src/screens/fetchingCredit';
import CreditScore from '../src/screens/creditscore';
import BottomTab from './bottomTab';
import Name from './screens/enterName';
import Email from './screens/enterEmail';
import PanCard from './screens/enterPanCard';
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
        <Stack.Screen
          name="Credit"
          component={Credit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreditScore"
          component={CreditScore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={Name}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PanCard"
          component={PanCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
