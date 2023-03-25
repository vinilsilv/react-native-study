import React from "react";
import { StyleSheet, Text, View } from "react-native";

export class TodoList extends React.Component {
  constructor(props) {
    super(props)

  }

  getTodos = (todos) =>
    todos.map((todo, i) => {
      return (
        <View style={styles.todoItem}>
          <Text style={styles.todoText} onPress={() => this.props.deleteTodo(i)} key={i}>{todo}</Text>
        </View>
      )
    })


  render() {
    return (
      this.getTodos(this.props.todos)
    )
  }
}

const styles = StyleSheet.create({
  todoItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'purple',
    marginBottom: 5,
    borderRadius: 10
  },
  todoText: {
    color: '#fff'
  }
})