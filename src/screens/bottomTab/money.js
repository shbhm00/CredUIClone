import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function money() {
  return (
    <View style={styles.container}>
      <Text>Money</Text>
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
