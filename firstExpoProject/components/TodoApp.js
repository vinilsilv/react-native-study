import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Title from "./Title";
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {
  constructor() {
    super()

    this.handleTextInput = this.handleTextInput.bind(this)
    this.addTodo = this.addTodo.bind(this)

    this.state = {
      todos: ['Wash the dishes', 'Study React Native', 'Create a todo app'],
      text: 'Testing'
    }
  }


  handleTextInput = (text) => this.setState({ text })

  addTodo = async () => {
    if(this.state.text === '')
      return

    this.setState(state => ({
      todos: [
        ...state.todos,
        state.text
      ]
    }))

    this.setState({ text: '' })
    console.log(this.state.todos)
  }

  render() {
    const { todos, text } = this.state

    return (
      <View>
        <Title text={"Todo App"} />
        <View>
          <TextInput
            onChangeText={this.handleTextInput}
            value={text}
          />
          <TouchableOpacity onPress={() => this.addTodo()}>
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
        <TodoList todos={todos} />
      </View>
    )
  }
}