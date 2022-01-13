import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
  Image,
} from 'react-native';
import {vh, vw, normalize} from '../dimension/dimension';
export default function fetchingCredit() {
  const spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4500,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1.9, alignItems: 'center', width: '80%'}}>
        <Text style={styles.heading}>fetching your credit score</Text>
        <Text style={styles.headingPara}>
          hang on, while we check your eligibility
        </Text>
      </View>
      <View style={styles.animatedCard}>
        <Animated.Image
          style={{transform: [{rotate: spin}]}}
          source={require('../assets/Card.png')}
        />
        <View
          style={{
            position: 'absolute',
            top: normalize(8),
            left: normalize(8),
            height: normalize(150),
            width: normalize(150),
            borderRadius: 1000,
            backgroundColor: '#1f2427',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Animated.Image
            style={{
              borderRadius: 50,
            }}
            source={require('../assets/Card.png')}
          />
        </View>
      </View>
      <View style={styles.divider}>
        <Image source={require('../assets/Divider.png')} />
        <Text style={styles.headingPara1}>calibrating your score</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f2427',
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: normalize(25),
    color: '#CFD0D0',
    fontWeight: '700',
    width: '80%',
    textAlign: 'center',
    letterSpacing: vw(0.5),
    paddingTop: normalize(60),
  },
  headingPara: {
    textAlign: 'center',
    width: '80%',
    fontSize: normalize(20),
    color: '#8C8E8F',
    letterSpacing: 0.5,
    paddingTop: normalize(30),
  },
  animatedCard: {
    flex: 2,
  },
  divider: {
    flex: 0.6,
    alignItems: 'center',
  },
  headingPara1: {
    textAlign: 'center',
    width: '80%',
    fontSize: normalize(20),
    color: '#8C8E8F',
    letterSpacing: 0.5,
    paddingTop: normalize(30),
  },
});
