import React from 'react';
import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import TopTab from '../topBar/index';
export default function cards() {
  return (
    <SafeAreaView style={styles.container}>
      <TopTab />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#1f2427',
  },
});
