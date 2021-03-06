import * as React from 'react';
import {Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyCard from './screens/mycards';
import MaxScreens from './screens/max';
import BenefitScreen from './screens/benefits';
import ManageScreen from './screens/manage';
import Divider from '../../components/divider';
import {vh, vw, normalize} from '../../dimension/dimension';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarLabelStyle: {
          width: vw(100),
          fontSize: normalize(14),
          fontWeight: '700',
          letterSpacing: 0.5,
          textTransform: 'lowercase',
          //   color: 'white',
        },
        tabBarStyle: {
          backgroundColor: '#1f2427',
          marginRight: vw(80),
          marginLeft: vw(20),
        },
      }}>
      <Tab.Screen
        name="my cards"
        component={MyCard}
        options={{tabBarLabel: 'my cards'}}
      />
      <Tab.Screen
        name="max"
        component={MaxScreens}
        options={{tabBarLabel: 'max'}}
      />
      <Tab.Screen
        name="benefits"
        component={BenefitScreen}
        options={{tabBarLabel: 'benefits'}}
      />
      <Tab.Screen
        name="manage"
        component={ManageScreen}
        options={{tabBarLabel: 'manage'}}
      />
    </Tab.Navigator>
  );
}
export default function TopTab() {
  return (
    <View style={{flex: 1}}>
      <Divider />
      <MyTabs />
    </View>
  );
}
