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
import Shadow from '../components/neomorphic/shadow';
// import Unchecked from '../assets/Checkbox.png';
// const ScreenWidth = Dimensions.get('window').width;
// const ScreenHeight = Dimensions.get('window').height;

export default function home({navigation, route}) {
  //   const [activeText, setActiveText] = useState('#F9D3B466');
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
        <Shadow
          height={45}
          width={45}
          style={styles.shadow}
          topColor={'#15181b'}
          bottomColor={'#293033'}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/leftArrow.png')} />
          </TouchableOpacity>
        </Shadow>
        <View style={styles.textWrapper}>
          <Text style={styles.onboardingText}>we have sent you</Text>
          <Text style={styles.onboardingText}>an OTP</Text>
          <Text style={styles.detailsText}>
            enter the 4 digit OTP sent on <Text>{route.params}</Text> to proceed
          </Text>
          <TextInput
            placeholder="OTP"
            placeholderTextColor="#343739"
            style={styles.textInput}
            maxLength={41}
            autoFocus
            keyboardType="numeric"
            onChangeText={text => onChangeText(text)}
          />
          <Text style={styles.detailsText1}>
            didn't receive OTP? <Text>Resend OTP</Text>
          </Text>
        </View>
        <View style={styles.bottomWrapper}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     marginLeft: 50,
  //     height: 100,
  //     width: 200,
  //     borderRadius: 100 / 2,
  //     backgroundColor: 'grey',
  //   },
  //   container1: {
  //     alignItems: 'center',
  //     flex: 1,
  //   },
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
    flex: 1,
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
  //   bottomWrapper: {
  //     flex: 1,
  //   },
  //   checkbox: {
  //     marginVertical: 20,
  //   },
  //   paragraph: {
  //     color: '#4B4E4F',
  //     width: 340,
  //     fontSize: 12,
  //     lineHeight: 22,
  //     marginTop: 5,
  //   },
  //   spanText: {
  //     color: '#8C8E8F',
  //   },
});
