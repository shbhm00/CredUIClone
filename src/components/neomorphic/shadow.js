import React from 'react';
import {View, StyleSheet} from 'react-native';
export default function Shadow({
  height,
  width,
  children,
  style,
  topColor,
  bottomColor,
}) {
  return (
    <View style={[styles.topShadow, {shadowColor: topColor}]}>
      <View style={[styles.bottomShodow, {shadowColor: bottomColor}]}>
        <View
          style={[
            styles.inner,
            {
              width: width || 40 / 2,
              height: height || 40 / 2,
              borderRadius: height / 2 || 40 / 2,
            },
            style,
          ]}>
          {children}
        </View>
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
  },
  bottomShodow: {
    shadowOffset: {
      width: -10,
      height: -10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  linearGradient: {
    borderRadius: 60,
  },
});
