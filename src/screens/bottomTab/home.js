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
      <View style={{paddingLeft: vw(20), paddingTop: vh(30)}}>
        <Card
          color="#e1224d"
          height={ScreenHeight - vh(210)}
          width={ScreenWidth - vw(40)}
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
