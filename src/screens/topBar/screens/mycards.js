import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Cards from '../../../components/card-holder/index';
import InnerShadow from '../../../components/neomorphic/innerShadow';
import ICICIBankLogo from '../../../assets/cards/bankName.png';
import HdfcLogo from '../../../assets/cards/HDFC_logo.png';
import Provider from '../../../assets/cards/visa.png';
import {vh, vw, normalize} from '../../../dimension/dimension';
export default function mycards() {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          marginLeft: vw(15),
          fontSize: 20,
          paddingVertical: 20,
          color: '#ECECEC',
          fontWeight: '700',
          letterSpacing: 1,
        }}>
        your cards
      </Text>
      <View style={{marginHorizontal: vw(10)}}>
        <InnerShadow
          height={vh(340)}
          width={vw(360)}
          style={styles.shadow1}
          topColor={'#15181b'}
          bottomColor={'#293033'}
          gradientFirstColor={'#1c2023'}
          gradientSecondColor={'#21272a'}>
          <Cards
            BankName="ICICI PREMIUM"
            Name="SHUBHAM MISHRA"
            backgroundColor="#7A5A94"
            BankLogo={ICICIBankLogo}
            CardNumber="4145 895XX XXXX 9873"
            cardProvider={Provider}
          />
        </InnerShadow>
        <InnerShadow
          height={vh(340)}
          width={vw(360)}
          style={styles.shadow1}
          topColor={'#15181b'}
          bottomColor={'#293033'}
          gradientFirstColor={'#1c2023'}
          gradientSecondColor={'#21272a'}>
          <Cards
            BankName="HDFC BANK"
            Name="SHUBHAM MISHRA"
            backgroundColor="#4C535B"
            BankLogo={HdfcLogo}
            CardNumber="4145 895XX XXXX 9873"
            cardProvider={Provider}
          />
        </InnerShadow>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2427',
  },
  shadow1: {
    borderRadius: normalize(12),
    marginVertical: vh(12),
  },
});
