import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function mycards() {
  return (
    <View style={styles.container}>
      <Text style={{marginTop: 200, color: 'red'}}>Hello</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2427',
  },
});
