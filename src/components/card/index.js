import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import InnerShadow from '../neomorphic/innerShadow';
import {vh, vw, normalize} from '../../dimension/dimension';
const ScreenWidth = Dimensions.get('window').width;
export default function index({color, height, width}) {
  return (
    <View>
      <InnerShadow
        height={height}
        width={width}
        style={styles.shadow1}
        topColor={'#15181b'}
        bottomColor={'#293033'}
        gradientFirstColor={'#1c2023'}
        gradientSecondColor={'#21272a'}>
        <View style={[styles.container, {backgroundColor: color}]}></View>
      </InnerShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow1: {
    borderRadius: 10,
  },
  container: {
    height: vh(390),
    width: vw(320),
    borderRadius: 10,
  },
});
