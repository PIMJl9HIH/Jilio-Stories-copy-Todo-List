import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import styled from 'styled-components'

const Header = styled.h1`list-style-type: none;`
const List = styled.ul`list-style-type: none;`

class App extends Component {

  render() {
    const {todos} = this.props;
    return (
      <div >
        <Header> Planner </Header>
        {this._renderTodos(todos)}
      </div>
    );
  }

  _renderTodos(todos) {
    return (
      <List>
        {todos.map( (todo, index ) => (
          <li key={todo.get('id')}>
            <TodoItem index={index} />
          </li>
        ))}
      </List>
    )
  }

}

function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
