import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import InnerShadow from '../components/neomorphic/innerShadow';
import Shadow from '../components/neomorphic/shadow';
import {vh, vw, normalize} from '../dimension/dimension';
const ScreenWidth = Dimensions.get('window').width;
export default function creditscore() {
  const [crediScore, setCreditScore] = useState(null);
  useEffect(() => {
    score();
  }, []);
  const score = () => {
    var number;
    do {
      number = Math.floor(100 + Math.random() * 799);
    } while (number < 100);
    setCreditScore(number);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{left: vw(24), paddingBottom: vh(30)}}>
        <Shadow
          height={45}
          width={45}
          style={styles.shadow}
          topColor={'#15181b'}
          bottomColor={'#293033'}>
          <Image source={require('../assets/leftArrow.png')} />
        </Shadow>
      </TouchableOpacity>
      <View styles={styles.textContainer}>
        <Text
          style={{
            color: '#CFD0D0',
            marginLeft: vw(24),
            fontSize: 20,
            fontWeight: '700',
            letterSpacing: 0.5,
          }}>
          your experian score
        </Text>
        <Text></Text>
      </View>
      <View style={styles.centerWrapper}>
        <InnerShadow
          height={vh(250)}
          width={vw(170)}
          style={styles.shadow1}
          topColor={'#15181b'}
          bottomColor={'#293033'}
          gradientFirstColor={'#1c2023'}
          gradientSecondColor={'#21272a'}>
          <AnimatedCircularProgress
            size={150}
            width={15}
            fill={crediScore / 10}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            duration={2000}
            backgroundColor="#3d5875">
            {fill => (
              <Text style={{fontSize: 35, fontWeight: '700', color: 'white'}}>
                {crediScore}
              </Text>
            )}
          </AnimatedCircularProgress>
        </InnerShadow>
        <TouchableOpacity onPress={() => score()} style={styles.refreshButton}>
          <Shadow
            height={50}
            width={150}
            style={styles.shadow}
            topColor={'#15181b'}
            bottomColor={'#293033'}>
            <Text style={styles.refershText}>Refresh score</Text>
          </Shadow>
        </TouchableOpacity>
      </View>
      <Text>your credit score is better than `${}`</Text>
      <View style={{flex: 1}}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2427',
  },
  shadow: {
    backgroundColor: '#1f2427',
  },
  refershText: {
    color: '#CFD0D0',
    fontWeight: '500',
    fontSize: normalize(15),
  },
  textContainer: {flex: 1},
  centerWrapper: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshButton: {
    paddingTop: normalize(40),
  },
});
