import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Shadow from '../components/neomorphic/shadow';
import InnerShadow from '../components/neomorphic/innerShadow';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
export default function home({navigation}) {
  return (
    <View
      style={{
        backgroundColor: '#1f2427',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={styles.container1}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 80,
          }}>
          <Image source={require('../assets/onboarding.png')} />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.onboardingText}>
            pay your credit card bill. win rewards.
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
            <InnerShadow
              height={100}
              width={ScreenWidth - 40}
              style={styles.shadow1}
              topColor={'#15181b'}
              bottomColor={'#293033'}
              gradientFirstColor={'#1c2023'}
              gradientSecondColor={'#21272a'}>
              <Shadow
                height={80}
                width={ScreenWidth - 50}
                style={styles.shadow}
                topColor={'#15181b'}
                bottomColor={'#293033'}>
                <Text
                  style={{
                    color: '#cdb198',
                    fontWeight: '700',
                    letterSpacing: 1,
                  }}>
                  Continue
                </Text>
              </Shadow>
            </InnerShadow>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
    height: 100,
    width: 200,
    borderRadius: 100 / 2,
    backgroundColor: 'grey',
  },
  container1: {
    alignItems: 'center',
    flex: 1,
  },
  shadow: {
    backgroundColor: '#30519b',
  },
  linearGradient: {
    borderRadius: 60,
  },
  shadow1: {
    backgroundColor: '#343232',
  },
  onboardingText: {
    color: '#CFD0D0',
    fontSize: 24,
    width: 300,
    marginVertical: 30,
    fontWeight: '700',
    letterSpacing: 1,
    textAlign: 'center',
  },
});
