import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function club() {
  return (
    <View style={styles.container}>
      <Text>Club</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1f2427',
  },
});
