import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    //setTodos(todos.concat([newTodo]))
    // setTodos( (prevTodos) => {
    //   return[
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [
      ...prev, 
      {
      id: Date.now().toString(),
      title: title
    }
  ])
    //// создаем новый элемент тоду и добавляем его в конец стэйта для обновления стэйта
  }  


  return (
    <View >
      <Navbar title="Todo App"/>  
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
  
        <FlatList
         style={styles.listWrap}
        keyExtractor={item => item.id}
        data={todos}
        renderItem={ ({ item }) => <Todo todo={item} />}
        />

        {/* <View>
          { todos.map( todo => {
            return <Todo todo={todo} key={todo.id}/>
          } ) }
        </View> */}

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 50
  },
  listWrap: {
    //flexGrow: 1
    //flex: 0
  }
});

