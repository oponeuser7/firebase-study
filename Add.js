import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { firestore } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const Add = ({ navigation }) => {

  const [name, onChangeName] = useState('');
  
  const addUser = () => {
    addDoc(collection(firestore, 'user'), {
      name: name
    }).then(() => {
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
      <Button onPress={addUser} title='add'/>
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

export default Add;
