import * as React from 'react';
import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function FeedScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f2427',
      }}>
      <Text>Feed!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarLabelStyle: {
          width: 100,
          fontSize: 13,
          fontWeight: '700',
          letterSpacing: 0.5,
          textTransform: 'lowercase',
          //   color: 'white',
        },
        tabBarStyle: {
          backgroundColor: '#1f2427',
          marginRight: 70,
          marginLeft: 20,
        },
      }}>
      <Tab.Screen
        name="my cards"
        component={FeedScreen}
        options={{tabBarLabel: 'my cards'}}
      />
      <Tab.Screen
        name="max"
        component={NotificationsScreen}
        options={{tabBarLabel: 'max'}}
      />
      <Tab.Screen
        name="benefits"
        component={ProfileScreen}
        options={{tabBarLabel: 'benefits'}}
      />
      <Tab.Screen
        name="manage"
        component={ProfileScreen}
        options={{tabBarLabel: 'manage'}}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return <MyTabs />;
}
