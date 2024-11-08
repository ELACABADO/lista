import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EntradaTarea = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const taskInputHandler = (enteredText) => {
    setTask(enteredText);
  };

  const addTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Agregar tarea"
        style={styles.input}
        onChangeText={taskInputHandler}
        value={task}
      />
      <Button title="Agregar" onPress={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default EntradaTarea;
