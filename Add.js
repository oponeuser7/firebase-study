import React from 'react';
import { useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const Add = ({ navigation }) => {
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='name'></TextInput>
      <Button onPress={() => console.log('add')} title='add'/>
    </View>
  );
};

export default Add;

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
