import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { firestore, analytics } from './firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { logEvent } from 'firebase/analytics';

const Modify = ({ route, navigation }) => {

  const [name, onChangeName] = useState('');
  const { id } = route.params;
  
  const modifyUser = () => {
    updateDoc(doc(firestore, 'user', id), {
      name: name
    }).then(() => {
      logEvent(analytics, 'good');
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='name'
        onChangeText={onChangeName}
      >
      </TextInput>
      <Button onPress={modifyUser} title='Modify'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});

export default Modify;
