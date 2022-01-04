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
import Checked from '../assets/checked.png';
import Unchecked from '../assets/Checkbox.png';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export default function home({navigation}) {
  const [check, setCheck] = useState(Unchecked);
  const [activeText, setActiveText] = useState('#F9D3B466');
  const checkbox = () => {
    if (check == Unchecked) {
      setCheck(Checked);
      setActiveText('#F9D3B4');
    } else {
      setCheck(Unchecked);
      setActiveText('#F9D3B466');
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#1f2427',
        flex: 1,
      }}>
      <View style={styles.mainWrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.onboardingText}>give us your</Text>
          <Text style={styles.onboardingText}>mobile number</Text>
          <Text style={styles.detailsText}>
            to apply, we need your mobile number linked to your credit cards
          </Text>
          <TextInput
            placeholder="9999999999"
            placeholderTextColor="#343739"
            style={styles.textInput}
            maxLength={10}
            autoFocus
          />
        </View>
        <View style={styles.bottomWrapper}>
          <TouchableOpacity onPress={checkbox}>
            <Image source={check} style={styles.checkbox} />
          </TouchableOpacity>
          <Text style={styles.paragraph}>
            you agree to allow CRED to check your credit information with{' '}
            <Text style={styles.spanText}>RBI approved credit bureaus.</Text>
          </Text>
          <Text style={styles.paragraph}>
            we need to check if you are a credit card holder and are above our
            accepeted credit score threshold. it will not impack your credit
            score.
          </Text>
          <InnerShadow
            height={90}
            width={208}
            style={styles.shadow1}
            topColor={'#15181b'}
            bottomColor={'#293033'}
            gradientFirstColor={'#1c2023'}
            gradientSecondColor={'#21272a'}>
            <Text style={{color: activeText, fontSize: 16, fontWeight: '500'}}>
              Agree &amp; continue
            </Text>
          </InnerShadow>
        </View>
      </View>
    </SafeAreaView>
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
    marginVertical: 30,
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
    paddingTop: 83,
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
  textInput: {
    fontSize: 30,
    paddingVertical: 34,
    color: '#CFD0D0',
    fontWeight: '500',
  },
  textWrapper: {
    flex: 1,
  },
  bottomWrapper: {
    flex: 1,
  },
  checkbox: {
    marginVertical: 20,
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
