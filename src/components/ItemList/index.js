import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoItem from '../TodoItem'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../../store/actions' // 因为actions里面导出的是export 所有const，素以要全部引入且重命名为Actions
import { Filter } from '../../store/actionTypes'
const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = Filter

class ItemListRender extends Component {
  render() { 
    const { todos, actions, filter } = this.props
    let filtedData
    switch (filter) {
      case SHOW_ALL:
        filtedData = todos
        break;
      case SHOW_ACTIVE:
        filtedData = todos.filter(todo => !todo.isFinish)
        break;
      case SHOW_COMPLETED:
        filtedData = todos.filter(todo => todo.isFinish)
        break;
      default:
        filtedData = todos
        break;
    }
    return (
      filtedData.map(todo =>
        <TodoItem todo={todo} key={todo.id} {...actions} />
      )
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)   // bindActionCreators会循环去绑定每个actions与dispatch
})
const ItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemListRender)

export default ItemList