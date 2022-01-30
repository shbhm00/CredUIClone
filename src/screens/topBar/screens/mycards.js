import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Cards from '../../../components/card-holder/index';
import InnerShadow from '../../../components/neomorphic/innerShadow';
import ICICIBankLogo from '../../../assets/cards/bankName.png';
import HdfcLogo from '../../../assets/cards/HDFC_logo.png';
import Provider from '../../../assets/cards/visa.png';
export default function mycards() {
  return (
    <ScrollView style={styles.container}>
      <View style={{marginHorizontal: 15}}>
        <InnerShadow
          height={340}
          width={360}
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
          height={340}
          width={360}
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
    borderRadius: 12,
    marginVertical: 15,
  },
});
