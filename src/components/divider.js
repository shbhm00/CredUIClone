import React from 'react';
import {View, Image} from 'react-native';
import DividerImage from '../assets/onboardingIcons/Divider.png';
export default function divider() {
  return (
    <View>
      <Image source={DividerImage} />
    </View>
  );
}
