import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  Image,
} from 'react-native';
import Shadow from './neomorphic/shadow';
import {vh, vw, normalize} from '../dimension/dimension';
export default function profileButtons({title, image}, props) {
  const {style, ...rest} = props;
  return (
    <View>
      <View style={styles.profileWrapper}>
        <TouchableOpacity style={styles.profile}>
          <Shadow
            height={60}
            width={60}
            style={styles.shadow}
            topColor={'#15181b'}
            bottomColor={'#293033'}>
            <Image source={image} style={styles.buttonImage} />
          </Shadow>
          <Text
            style={{
              fontSize: vh(12),
              letterSpacing: 0.5,
              color: '#8C8E8F',
              fontWeight: '700',
              paddingTop: vh(10),
            }}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  shadow: {
    backgroundColor: '#1f2427',
  },
  profileWrapper: {
    marginLeft: vw(10),
  },
  profile: {
    alignItems: 'center',
  },
  buttonImage: {
    height: normalize(30),
    width: normalize(30),
  },
});
