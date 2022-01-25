import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import InnerShadow from '../neomorphic/innerShadow';
import {vh, vw, normalize} from '../../dimension/dimension';
const ScreenWidth = Dimensions.get('window').width;
export default function index({color, height, width, innerHeight, innerWidth}) {
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
            {backgroundColor: color, height: innerHeight, width: innerWidth},
          ]}></View>
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
});
