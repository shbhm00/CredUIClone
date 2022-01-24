import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Modal from '../../components/modal';
export default function modal({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = navigation.isFocused();
  if (isFocused) {
    setModalVisible(true);
  } else {
    setModalVisible(false);
  }

  return (
    <View style={{flex: 1, backgroundColor: '#1f2427'}}>
      <Modal modalVisible={modalVisible} />
    </View>
  );
}
