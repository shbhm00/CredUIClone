import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from './screens/bottomTab/home';
import Cards from './screens/bottomTab/card';
import Money from './screens/bottomTab/money';
import Club from './screens/bottomTab/club';
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#1c2023', height: 100, paddingTop: 15},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <Image
                source={require('./assets/bottomtabIcons/active_home.png')}
              />
            ) : (
              <Image
                source={require('./assets/bottomtabIcons/inactive_home.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="cards"
        component={Cards}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <Image
                source={require('./assets/bottomtabIcons/active_card.png')}
              />
            ) : (
              <Image
                source={require('./assets/bottomtabIcons/inactive_card.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="money"
        component={Money}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <Image
                source={require('./assets/bottomtabIcons/active_money.png')}
              />
            ) : (
              <Image
                source={require('./assets/bottomtabIcons/inactive_money.png')}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Club"
        component={Club}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <Image
                source={require('./assets/bottomtabIcons/active_club.png')}
              />
            ) : (
              <Image
                source={require('./assets/bottomtabIcons/inactive_club.png')}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
