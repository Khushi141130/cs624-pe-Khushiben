import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos = [], deleteTodo, toggleComplete }) => {
  return (
    <View>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={{ ...todo, todoIndex: index }} // pass index explicitly
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </View>
  );
};

export default TodoList;