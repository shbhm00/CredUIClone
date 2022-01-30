import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function index() {
  return <View style={[styles.container]}></View>;
}
const styles = StyleSheet.create({
  container: {
    height: 220,
    width: 350,
  },
});
