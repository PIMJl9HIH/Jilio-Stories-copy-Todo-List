import React, { Component } from 'react'
import { connect } from 'react-redux'
import {TYPE} from "../consts";
import styled from 'styled-components'

const Title = styled.input`
  border: 2px solid black;
  display: block;
  width: 200px;
  font-size: 20px;
  border-top: none;
  border-left: none;
  border-right: none;
  color: gray;
  outline: none;
`

const Description = styled.input`
  border: 2px solid black;
  display: block;
  width: 200px;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 16px;
  color: gray;
  outline: none;
`
const Button = styled.button`
  margin-top: 20px;
  outline: none;
`


class TodoItem extends Component {
  render() {
    const {
      title,
      description,
      index,
      addTodo,
      removeTodo,
      updateTodo
    } = this.props;

    const first = index === 0

    return (
      <div>
        <div>{index}</div>
        <Title
          type="text"
          defaultValue={title}
          onChange={ (e) => {

            updateTodo({
              index,
              value: e.target.value,
              field: 'title',
            })
          }}
        />
        <br/>
        <Description
          type="text"
          defaultValue={description}
        />
        {first ? (
          <Button onClick={ addTodo }>Add</Button>
        )  : (
          <Button onClick={ () => removeTodo(index) }>Remove</Button>
        )}

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
      title: state.getIn(['todos', ownProps.index, 'title']),
      description: state.getIn(['todos', ownProps.index, 'description']),
    }
}

function mapDispatchToProps(dispatch) {
    return {
      addTodo: () =>
        dispatch({
          type: TYPE.ADD_TODO,

      }),
      removeTodo: payload =>
        dispatch({
          type: TYPE.REMOVE_TODO,
          payload,
      }),
      updateTodo: payload => dispatch({
        type: TYPE.UPDATE_TODO,
        payload
      })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)