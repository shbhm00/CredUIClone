import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

function ModalTester({modalVisible}) {
  const [isModalVisible, setModalVisible] = useState(modalVisible);
  console.log('modalvisibke', isModalVisible);
  function trigger() {
    props.callback();
  }
  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isModalVisible}
        coverScreen
        onBackdropPress={() => setModalVisible(!isModalVisible)}>
        <View style={{flex: 0.81, backgroundColor: 'white'}}>
          <Text>Hello!</Text>
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
