import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import InnerShadow from '../components/neomorphic/innerShadow';
// import Shadow from '../components/neomorphic/shadow';

export default function Permission({navigation, route}) {
  const [buttonEnable, setButtonEnable] = useState(true);
  const onChangeText = text => {
    if (text.length == 4) {
      setButtonEnable(false);
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1f2427',
        flex: 1,
      }}>
      <View style={styles.mainWrapper}>
        {/* <Shadow
          height={45}
          width={45}
          style={styles.shadow}
          topColor={'#15181b'}
          bottomColor={'#293033'}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/leftArrow.png')} />
          </TouchableOpacity>
        </Shadow> */}
        <View style={{flexDirection: 'row-reverse'}}>
          <View sty>
            <Text
              style={{
                color: '#4B4E4F',
                marginRight: 24,
                marginBottom: 10,
              }}>
              Deny permission
            </Text>
            <View
              style={{
                height: 0, // height is '0' so that the view will not occupy space
                width: 110, // as much as you want to 'Stretch' the underline
                borderWidth: 1,
                borderColor: '#4B4E4F',
                borderStyle: 'dotted',
              }}></View>
          </View>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.onboardingText}>we take the</Text>
          <Text style={styles.onboardingText}>following permission</Text>
          {/* <Text style={styles.detailsText}>
            enter the 4 digit OTP sent on <Text>{route.params}</Text> to proceed
          </Text> */}
          <TextInput
            placeholder="OTP"
            placeholderTextColor="#343739"
            style={styles.textInput}
            maxLength={4}
            autoFocus
            keyboardType="numeric"
            onChangeText={text => onChangeText(text)}
          />
          <Text style={styles.detailsText1}>
            didn't receive OTP? <Text>Resend OTP</Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OTP')}
            disabled={buttonEnable}>
            <InnerShadow
              height={80}
              width={120}
              style={styles.shadow1}
              topColor={'#15181b'}
              bottomColor={'#293033'}
              gradientFirstColor={'#1c2023'}
              gradientSecondColor={'#21272a'}>
              <Text
                style={{
                  color: '#F9D3B4',
                  fontSize: 16,
                  fontWeight: '500',
                  letterSpacing: 0.5,
                }}>
                Continue
              </Text>
            </InnerShadow>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <Image source={require('../assets/Divider.png')} />
        <View style={styles.bottomPara}>
          <Text style={styles.paragraph}>
            by clicking on continue, you are indicating that you have read and
            agree to our <Text style={styles.spanText}>terms of use</Text> &amp;{' '}
            <Text style={styles.spanText}>privacy policy</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#1f2427',
  },
  linearGradient: {
    borderRadius: 60,
  },
  shadow1: {
    backgroundColor: '#343232',
  },
  onboardingText: {
    color: '#CFD0D0',
    fontSize: 20,
    width: 300,
    fontWeight: '700',
    letterSpacing: 1,
  },
  mainWrapper: {
    paddingLeft: 24,
    paddingTop: 20,
    flex: 4.5,
  },
  detailsText: {
    fontSize: 16,
    color: '#8C8E8F',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.5,
    width: 278,
    paddingVertical: 8,
  },
  detailsText1: {
    fontSize: 13,
    color: '#8C8E8F',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: 0.5,
    width: 278,
    paddingVertical: 8,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 30,
    paddingVertical: 34,
    color: '#CFD0D0',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  textWrapper: {
    paddingTop: 30,
  },
  bottomWrapper: {
    flex: 1,
    paddingLeft: 24,
  },
  bottomPara: {
    paddingTop: 30,
  },
  paragraph: {
    color: '#4B4E4F',
    width: 340,
    fontSize: 12,
    lineHeight: 22,
    marginTop: 5,
  },
  spanText: {
    color: '#8C8E8F',
  },
});
