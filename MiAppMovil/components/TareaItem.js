import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TareaItem = ({ title, id, onDeleteTask }) => {
  return (
    <View style={styles.taskItem}>
      <Text>{title}</Text>
      <Button title="Eliminar" onPress={() => onDeleteTask(id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default TareaItem;
