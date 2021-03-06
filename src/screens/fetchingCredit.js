import React, {useEffect, useState} from 'react';
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
import Cards from '../assets/onboardingIcons/Card.png';
import successCard from '../assets/onboardingIcons/successCard.png';
export default function fetchingCredit({navigation}) {
  const [image, setImage] = useState(Cards);
  useEffect(() => {
    setTimeout(() => {
      setImage(successCard);
    }, 3000);
  });
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('CreditScore');
    }, 4000);
  });

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
      <View style={{flex: 1, alignItems: 'center', width: '80%'}}>
        <Text style={styles.heading}>fetching your credit score</Text>
        <Text style={styles.headingPara}>
          hang on, while we check your eligibility
        </Text>
      </View>
      <View style={styles.animatedCard}>
        <View>
          <Animated.Image
            style={{transform: [{rotate: spin}]}}
            source={Cards}
          />
          <View
            style={{
              position: 'absolute',
              top: normalize(9),
              height: normalize(150),
              width: normalize(150),
              borderRadius: 1000,
              backgroundColor: '#1f2427',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              left: normalize(9),
            }}>
            <Animated.Image
              style={{
                borderRadius: 60,
              }}
              source={image}
            />
          </View>
        </View>
      </View>
      <View style={styles.divider}>
        <Image source={require('../assets/onboardingIcons/Divider.png')} />
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
    flex: 2.2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  divider: {
    flex: 0.5,
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
