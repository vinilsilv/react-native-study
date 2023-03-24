import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
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

  addTodo = () => {
    const text = this.state.text.replaceAll(' ', '')
    if (text === '')
      return

    this.setState(state => ({
      todos: [
        state.text,
        ...state.todos
      ]
    }))

    this.setState({ text: '' })
    console.log(this.state.todos)
  }

  deleteTodo = (index) => {
    const todos = this.state.todos
    todos.splice(index, 1)
    this.setState({ todos })
  }

  render() {
    const { todos, text } = this.state

    return (
      <View>
        <Title text={"Todo App"} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={this.handleTextInput}
            value={text}
          />
          <TouchableOpacity style={styles.addButton} onPress={() => this.addTodo()}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <TodoList todos={todos} deleteTodo={this.deleteTodo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'space-between',
    maxWidth: '90%'
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: '80%'
  },
  addButton: {
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8
  }
})