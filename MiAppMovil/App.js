import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import EntradaTarea from './components/EntradaTarea';
import ListaDeTareas from './components/ListaDeTareas';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: task },
    ]);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Lista de Tareas</Text>
      <EntradaTarea onAddTask={addTaskHandler} />
      <ListaDeTareas tasks={tasks} onDeleteTask={deleteTaskHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});
