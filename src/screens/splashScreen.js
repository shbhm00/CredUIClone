import React, {useEffect} from 'react';
import {View, Dimensions, Image} from 'react-native';
const screenHeight = Dimensions.get('window').height;
export default function splashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2200);
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#22292f',
      }}>
      <View style={{alignSelf: 'center', marginTop: screenHeight / 2.7}}>
        <Image
          source={require('../assets/logo.gif')}
          style={{height: 300, width: 300}}
        />
      </View>
    </View>
  );
}
