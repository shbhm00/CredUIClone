import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Modal from '../../components/modal';
export default function modal({navigation}) {
  const [modalVisible, setModalVisible] = useState(true);
  const isFocused = navigation.isFocused();
  useEffect(() => {
    if (isFocused) {
      setModalVisible(true);
    } else {
      setModalVisible(false);
    }
  }, [modalVisible]);

  return (
    <View style={{flex: 1, backgroundColor: '#1f2427'}}>
      <Modal modalVisible={modalVisible} />
    </View>
  );
}
