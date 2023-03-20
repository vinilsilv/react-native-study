import React from "react";
import { Text } from "react-native";

export class TodoList extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      todos: this.props.todos
    }
  }

  getTodos(todos) {
    return todos.map(el => {
      return <Text key={el}>{el}</Text>
    })
  }

  render() {
    const {todos} = this.state


    return (
      this.getTodos(todos)
    )
  }
}