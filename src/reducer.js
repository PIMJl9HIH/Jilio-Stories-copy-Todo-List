import { TYPE, TodoRecord } from './consts'
import moment from 'moment'

function reducer (state,action) {
  switch (action.type) {

    case TYPE.ADD_TODO:
      return state.update('todos', todos =>
        todos.insert(0, new TodoRecord({ id: moment() }))
      )

    case TYPE.REMOVE_TODO:
      return state.update('todos', todos => todos.remove(action.payload))

    case TYPE.UPDATE_TODO:
      const {index, field, value } = action.payload;
      return state.updateIn(['todos', index], todo => todo.set(field, value))

    default:
      return state
  }
}

export default reducer