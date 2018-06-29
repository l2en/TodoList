import { combineReducers } from 'redux'
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_TODO,
  Filter,
  COMPLETED_ALL_TODO,
  CLEAR_COMPLETED_TODO,
  SHOW_FILTEDATA
} from './actionTypes'
const { SHOW_ALL } = Filter

// store里面包括了state,dispatch(),getState(),subscribe()....等
// reducer里面的todos和filter就是state里面存的对象的key，key对应的数据就是我们需要的数据
const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.data.id,
          isFinish: false,
          content: action.data.content
        }
      ]
    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, content: action.content }
          : todo
      )
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id
      })
    case TOGGLE_TODO:
      return state.map(todo =>    // 这里的return是返回一个新的state数组
        todo.id === action.id
          ? { ...todo, isFinish: !todo.isFinish } // <==> Object.assign({}, todo, isFinish: true) return 一个新的对象  // todo: {isFinish: false,id: 2134332332321,content:'Hello World'}
          : todo
      )
    case COMPLETED_ALL_TODO:
        if(state.every(todo => {return todo.isFinish})) {
          return  state.map(todo => {return {...todo, isFinish:false}})
        } else {
          return  state.map(todo => {return {...todo, isFinish:true}})
        }
    case CLEAR_COMPLETED_TODO:   // 反正此处不能修改原state
        return state.filter(todo => {
          return !todo.isFinish
        })
    default:
      return state
  }
}

const filter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SHOW_FILTEDATA:
      return action.filteType
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos,
  filter
})
export default rootReducer