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
import {useSelector} from 'react-redux';
import InnerShadow from '../components/neomorphic/innerShadow';
import Shadow from '../components/neomorphic/shadow';
import {vh, vw, normalize} from '../dimension/dimension';
export default function Name({navigation, route}) {
  const [buttonEnable, setButtonEnable] = useState(true);
  const onChangeText = text => {
    var panPat = /[a-zA-Z]{3}[PCHFATBLJG]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$/;
    if ((text.length === 10) & panPat.test(text)) {
      setButtonEnable(false);
    }
  };
  const counter = useSelector(state => state);
  //   console.log('counter', counter.authReducer.userDetails);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1f2427',
        flex: 1,
      }}>
      <View style={styles.mainWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Shadow
            height={normalize(45)}
            width={normalize(45)}
            style={styles.shadow}
            topColor={'#15181b'}
            bottomColor={'#293033'}>
            <Image
              source={require('../assets/onboardingIcons/leftArrow.png')}
            />
          </Shadow>
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.onboardingText}>enter your pancard</Text>
          <TextInput
            placeholder="PAN CARD"
            placeholderTextColor="#343739"
            style={styles.textInput}
            autoCapitalize="characters"
            autoFocus
            onChangeText={text => onChangeText(text)}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Credit')}
            disabled={buttonEnable}>
            <InnerShadow
              height={normalize(80)}
              width={normalize(120)}
              style={styles.shadow1}
              topColor={'#15181b'}
              bottomColor={'#293033'}
              gradientFirstColor={'#1c2023'}
              gradientSecondColor={'#21272a'}>
              <Text
                style={{
                  color: '#F9D3B4',
                  fontSize: normalize(16),
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
        <Image source={require('../assets/onboardingIcons/Divider.png')} />
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
    borderRadius: normalize(60),
  },
  shadow1: {
    backgroundColor: '#343232',
  },
  onboardingText: {
    color: '#CFD0D0',
    fontSize: normalize(20),
    width: normalize(300),
    fontWeight: '700',
    letterSpacing: 1,
  },
  mainWrapper: {
    paddingLeft: normalize(24),
    paddingTop: normalize(50),
    flex: 4.5,
  },
  detailsText: {
    fontSize: normalize(16),
    color: '#8C8E8F',
    fontWeight: '500',
    lineHeight: normalize(22),
    letterSpacing: 0.5,
    width: normalize(278),
    paddingVertical: normalize(8),
  },
  detailsText1: {
    fontSize: normalize(13),
    color: '#8C8E8F',
    fontWeight: '500',
    lineHeight: normalize(22),
    letterSpacing: 0.5,
    width: normalize(278),
    paddingVertical: 8,
    marginBottom: normalize(20),
  },
  textInput: {
    fontSize: normalize(30),
    paddingVertical: normalize(34),
    color: '#CFD0D0',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  textWrapper: {
    paddingTop: normalize(30),
  },
  bottomWrapper: {
    flex: 1,
    paddingLeft: normalize(24),
  },
  bottomPara: {
    paddingTop: normalize(30),
  },
  paragraph: {
    color: '#4B4E4F',
    width: normalize(340),
    fontSize: normalize(12),
    lineHeight: normalize(22),
    marginTop: normalize(5),
  },
  spanText: {
    color: '#8C8E8F',
  },
});
