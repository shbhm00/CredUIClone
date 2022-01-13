import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
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
      number = Math.floor(Math.random() * 999);
    } while (number < 100);
    setCreditScore(number);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.textContainer}>
        <Text>your experian score</Text>
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2427',
  },
  shadow: {
    backgroundColor: '#30519b',
  },
  refershText: {
    color: 'white',
    fontWeight: '500',
    fontSize: normalize(15),
  },
  textContainer: {
    marginLeft: vw(24),
  },
  centerWrapper: {
    alignItems: 'center',
  },
  refreshButton: {
    paddingTop: normalize(40),
  },
});
