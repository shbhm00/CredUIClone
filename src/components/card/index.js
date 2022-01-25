import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import InnerShadow from '../neomorphic/innerShadow';
import {vh, vw, normalize} from '../../dimension/dimension';
const ScreenWidth = Dimensions.get('window').width;
export default function index({
  color,
  height,
  width,
  innerHeight,
  innerWidth,
  title,
  textColor,
  textAlign,
  alignItems,
  para,
  paraColor,
  paraAlign,
  justifyContent,
}) {
  return (
    <View style={{paddingTop: 20}}>
      <InnerShadow
        height={height}
        width={width}
        style={styles.shadow1}
        topColor={'#15181b'}
        bottomColor={'#293033'}
        gradientFirstColor={'#1c2023'}
        gradientSecondColor={'#21272a'}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: color,
              height: innerHeight,
              width: innerWidth,
              alignItems: alignItems,
              justifyContent: justifyContent,
            },
          ]}>
          <Text
            style={[styles.title, {color: textColor, textAlign: textAlign}]}>
            {title}
          </Text>
          <Text style={[styles.para, {color: paraColor, textAlign: paraAlign}]}>
            {para}
          </Text>
        </View>
      </InnerShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow1: {
    borderRadius: 15,
  },
  container: {
    borderRadius: 15,
  },
  title: {
    fontSize: normalize(20),
    fontWeight: '700',
    letterSpacing: 1,
    width: '80%',
    textAlign: 'center',
    paddingBottom: vh(15),
  },
  para: {
    fontSize: normalize(15),
    fontWeight: '600',
    width: '80%',
  },
});
