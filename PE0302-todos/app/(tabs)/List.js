import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const List = ({ todos = [] }) => {
  return (
    <View style={styles.container}>
      {todos.map((todo, index) => (
        <Text key={index} style={styles.text}>
          {todo.title}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
  },
});

export default List;