import React from 'react';
import {View, Image} from 'react-native';
import DividerImage from '../assets/onboardingIcons/Divider.png';
export default function divider({marginTop}) {
  return (
    <View style={{position: 'absolute', top: 50, zIndex: 1}}>
      <Image source={DividerImage} />
    </View>
  );
}
