import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

const Todo = ({ todo = {}, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>
      {todo?.title ?? 'No Title'}
    </Text>
    <View style={styles.buttons}>
      <TodoButton
        name="Done"
        complete={todo.complete}
        onPress={() => toggleComplete?.(todo.todoIndex)}
      />
      <TodoButton
        name="Delete"
        onPress={() => deleteTodo?.(todo.todoIndex)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
  },
  todoText: {
    fontSize: 17,
  },
});

export default Todo;