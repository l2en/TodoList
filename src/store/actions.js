import * as actionTypes from './actionTypes'

export const addTodo = (data) => ({type: actionTypes.ADD_TODO, data})
export const deleteTodo = (id) => ({type: actionTypes.DELETE_TODO, id})
export const editTodo = (id, content) => ({type: actionTypes.EDIT_TODO, id, content})
export const toggleTodo =(id) => ({type: actionTypes.TOGGLE_TODO, id})
export const completedAllTodo =() => ({type: actionTypes.COMPLETED_ALL_TODO})
export const clearCompletedTodo = () => ({type: actionTypes.CLEAR_COMPLETED_TODO})
export const filterTodo = (filteType) => ({type: actionTypes.SHOW_FILTEDATA, filteType})
