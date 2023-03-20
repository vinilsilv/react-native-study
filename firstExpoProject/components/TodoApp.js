import React from "react";
import { View } from "react-native";
import Title from "./Title";
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: ['Wash the dishes', 'Study React Native', 'Create a todo app']
    }
  }

  render() {
    const { todos } = this.state

    return (
      <View>
        <Title text={"Todo App"} />
        <TodoList todos={todos} />
      </View>
    )
  }
}