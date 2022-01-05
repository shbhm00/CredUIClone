import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const ScreenWidth = Dimensions.get('window').width;
export default function Shadow(
  {
    height,
    width,
    children,
    style,
    topColor,
    bottomColor,
    gradientFirstColor,
    gradientSecondColor,
  },
  props,
) {
  return (
    <View style={[styles.topShadow, {shadowColor: topColor}]}>
      <View style={[styles.bottomShodow, {shadowColor: bottomColor}]}>
        <LinearGradient
          colors={[gradientFirstColor, gradientSecondColor]}
          angle={145}
          style={[
            styles.inner,
            {
              width: width || 40 / 2,
              height: height / 1.5 || 40 / 2,
              borderRadius: height / 2 || 40 / 2,
            },
            style,
          ]}>
          <View>{children}</View>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topShadow: {
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    // shadowColor: '#2d2b2b',
  },
  bottomShodow: {
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    // shadowColor: '#3b3939',
  },
  linearGradient: {
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
