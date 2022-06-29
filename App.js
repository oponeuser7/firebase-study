import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, FlatList, Button, TextInput} from 'react-native';
import { firestore } from './firebase';
import { collection, doc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';

const App = () => {

  const [list, setList] = useState(null);

  useEffect(() => {
    getDocs(collection(firestore, 'user'))
    .then((userSnaps) => {
      const arr = [];
      userSnaps.forEach((userSnap) => {
        if (userSnap.exists()) {
          arr.push([userSnap.data().name, userSnap.id]);
        }
      });
      setList(arr);
    });
  }, []);

  const deleteUser = (id) => {
    const userDoc = doc(firestore, 'user', id);
    if(userDoc) deleteDoc(userDoc); 
    const newArr = list.filter((data) => {
      return data[1]!==id;
    });
    setList(newArr);
  };

  const addUser = () => {
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={list} renderItem={({item}) => 
        (
          <View style={styles.node}>
            <Text>{item[1]}</Text>
            <Text>{item[0]}</Text>
            <Button onPress={() => deleteUser(item[1])} title='delete'/>
          </View>
        )
      }/>
      <View>
        <Button onPress={() => addUser()} title='add'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  node: {
    width: 200,
    borderBottomWidth: 0.5,
    borderRadius: 20,
    marginBottom: 5,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default App;
