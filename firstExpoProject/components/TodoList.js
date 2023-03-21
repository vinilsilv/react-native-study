import React from "react";
import { Text } from "react-native";

export class TodoList extends React.Component {
  constructor(props) {
    super(props)

  }

  getTodos = (todos) =>
    todos.map((todo, i) => {
      return <Text key={i}>{todo}</Text>
    })


  render() {
    return (
      this.getTodos(this.props.todos)
    )
  }
}