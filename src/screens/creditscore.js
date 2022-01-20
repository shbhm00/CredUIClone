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
export default function creditscore({navigation}) {
  const [crediScore, setCreditScore] = useState(null);
  const [percentageScore, setPercentageSore] = useState(null);
  useEffect(() => {
    score();
  }, []);
  const score = () => {
    var number;
    number = Math.floor(100 + Math.random() * 799);
    setCreditScore(number);
    setPercentageSore(Math.ceil((number / 900) * 100));
  };
  console.log('numbereee', percentageScore);
  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{left: vw(24), paddingBottom: vh(30)}}>
        <Shadow
          height={45}
          width={45}
          style={styles.shadow}
          topColor={'#15181b'}
          bottomColor={'#293033'}>
          <Image source={require('../assets/onboardingIcons/leftArrow.png')} />
        </Shadow>
      </TouchableOpacity> */}
      <View styles={styles.textContainer}>
        <Text
          style={{
            color: '#CFD0D0',
            marginLeft: vw(24),
            fontSize: normalize(20),
            fontWeight: '700',
            letterSpacing: 0.5,
            paddingTop: vh(30),
          }}>
          your experian score
        </Text>
        <Text></Text>
      </View>
      <View style={styles.centerWrapper}>
        <InnerShadow
          height={normalize(250)}
          width={normalize(170)}
          topColor={'#15181b'}
          bottomColor={'#293033'}
          gradientFirstColor={'#1c2023'}
          gradientSecondColor={'#21272a'}>
          <AnimatedCircularProgress
            size={normalize(150)}
            width={normalize(15)}
            fill={crediScore / 10}
            tintColor="#00e0ff"
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
      <View style={styles.bottomshadowWrapper}>
        <View style={styles.cardWrapper}>
          <View style={{paddingLeft: 30}}>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '700'}}>
              {percentageScore}%
            </Text>
            <Text
              style={{
                color: '#CFD0D0',
                fontSize: normalize(15),
                fontWeight: '500',
                width: '80%',
                paddingTop: 10,
              }}>
              Your score is better than {percentageScore}% of india
            </Text>
          </View>
          <AnimatedCircularProgress
            size={50}
            width={15}
            fill={crediScore / 10}
            tintColor="green"
            duration={2000}
            style={{paddingRight: normalize(30)}}
            backgroundColor="#3d5875"></AnimatedCircularProgress>
        </View>
      </View>
      <Image
        source={require('../assets/onboardingIcons/Divider.png')}
        style={{marginTop: normalize(15)}}
      />
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BottomTab')}
          style={styles.refreshButton}>
          <Shadow
            height={50}
            width={150}
            style={styles.shadow}
            topColor={'#15181b'}
            bottomColor={'#293033'}>
            <Text style={styles.moreinfoText}>More info</Text>
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
    backgroundColor: '#1f2427',
  },
  refershText: {
    color: '#CFD0D0',
    fontWeight: '500',
    fontSize: normalize(15),
  },
  textContainer: {flex: 1},
  centerWrapper: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  refreshButton: {
    paddingTop: normalize(30),
  },
  moreinfoText: {
    color: '#F9D3B4',
    fontSize: normalize(15),
    fontWeight: '700',
  },
  shadow1: {
    borderRadius: 30,
  },
  bottomshadowWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  cardWrapper: {
    height: normalize(200),
    width: normalize(330),
    backgroundColor: '#1c1d1c',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
