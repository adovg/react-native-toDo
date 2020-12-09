import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Todo App"/>
      <AddTodo/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

