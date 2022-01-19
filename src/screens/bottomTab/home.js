import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {vh, vw, normalize} from '../../dimension/dimension';
import Shadow from '../../components/neomorphic/shadow';
import Button from '../../components/profileButtons';
export default function home() {
  return (
    <View style={styles.container}>
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
    </View>
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
});
