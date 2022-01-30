import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {vh, vw, normalize} from '../../dimension/dimension';
export default function index({
  BankName,
  BankLogo,
  CardNumber,
  Name,
  cardProvider,
  backgroundColor,
}) {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: normalize(24),
        }}>
        <Text style={styles.textStyle}>{BankName}</Text>
        <Image source={BankLogo} style={{marginRight: 27}} />
      </View>
      <View
        style={{
          marginTop: vh(90),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <Text style={[styles.textStyle, {marginBottom: 10}]}>
            {CardNumber}
          </Text>
          <Text style={[styles.textStyle]}>{Name}</Text>
        </View>
        <Image source={cardProvider} style={{marginRight: 27}} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: vh(220),
    width: vw(350),
    borderRadius: normalize(12),
    marginVertical: vh(20),
  },
  textStyle: {
    color: '#ECEDEF',
    fontSize: normalize(16),
    lineHeight: vh(22),
    fontWeight: '700',
    marginLeft: vw(24),
  },
});
