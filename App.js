import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import Add from './Add';


const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShwon: false}}>
        <Stack.Screen name='Main'component={Main}/>
        <Stack.Screen name='Add'component={Add}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
