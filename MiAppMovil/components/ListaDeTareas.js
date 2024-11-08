import React from 'react';
import { FlatList } from 'react-native';
import TareaItem from './TareaItem';

const ListaDeTareas = ({ tasks, onDeleteTask }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <TareaItem title={item.value} id={item.id} onDeleteTask={onDeleteTask} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListaDeTareas;
