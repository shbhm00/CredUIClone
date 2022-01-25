import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  Dimensions,
} from 'react-native';
import {vh, vw, normalize} from '../../dimension/dimension';
import {useSelector} from 'react-redux';
import Button from '../../components/profileButtons';
import Card from '../../components/card';
const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;
export default function home() {
  const Selector = useSelector(state => state);
  console.log(Selector);
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: '#1c2023',
          padding: normalize(35),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingTop: normalize(20),
          }}>
          <Button title="profile" />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginLeft: vw(80),
            }}>
            <Button title="stories" />
            <Button
              title="notifications"
              image={require('../../assets/icons/bell.png')}
            />
            <Button
              title="control"
              image={require('../../assets/icons/Menu.png')}
            />
          </View>
        </View>
      </View>
      <Image source={require('../../assets/onboardingIcons/Divider.png')} />
      <View style={styles.heading}>
        <Text style={styles.greetingText}>
          hello,{Selector.authReducer.name}
        </Text>
        <Text style={styles.para}>
          here are today's{'\n'}recommended actions for you
        </Text>
      </View>
      <View style={{paddingLeft: vw(10), paddingTop: vh(10)}}>
        <Card
          color={data[0].color}
          height={normalize(data[0].height)}
          width={normalize(data[0].width)}
          innerHeight={normalize(data[0].innerHeight)}
          innerWidth={normalize(data[0].innerWidth)}
        />
        <Card
          color={data[1].color}
          height={normalize(data[1].height)}
          width={normalize(data[1].width)}
          innerHeight={normalize(data[1].innerHeight)}
          innerWidth={normalize(data[1].innerWidth)}
        />
        <Card
          color={data[2].color}
          height={normalize(data[2].height)}
          width={normalize(data[2].width)}
          innerHeight={normalize(data[2].innerHeight)}
          innerWidth={normalize(data[2].innerWidth)}
        />
      </View>
    </ScrollView>
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
  profileWrapper: {
    flexDirection: 'row',
    paddingLeft: vw(24),
    paddingTop: vh(24),
  },
  profile: {
    alignItems: 'center',
  },
  heading: {
    paddingLeft: vw(24),
  },
  greetingText: {
    fontSize: normalize(20),
    letterSpacing: 1,
    fontWeight: '600',
    color: '#e7e8ea',
    textTransform: 'capitalize',
  },
  para: {
    fontSize: normalize(15),
    fontWeight: '600',
    color: '#7a7e81',
    letterSpacing: 1,
    paddingTop: normalize(10),
  },
});

const data = [
  {
    title: '$750 cashback is waiting for you',
    para: 'earn a cashback of $750 when your reffered friend makes a payment on cred',
    height: 600,
    width: 350,
    innerHeight: 390,
    innerWidth: 340,
    buttonText: 'Win now',
    color: '#e1224d',
  },
  {
    title: 'we are gifting you \n ',
    para: 'earn a cashback of $750 when your reffered friend makes a payment on cred',
    height: 370,
    width: 350,
    innerHeight: 235,
    innerWidth: 340,
    buttonText: 'Win now',
    color: '#8d49c4',
  },
  {
    title: 'we are gifting you \n ',
    para: 'earn a cashback of $750 when your reffered friend makes a payment on cred',
    height: 370,
    width: 350,
    innerHeight: 235,
    innerWidth: 340,
    buttonText: 'Win now',
    color: '#e2e7e3',
  },
];
