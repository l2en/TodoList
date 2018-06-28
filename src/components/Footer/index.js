import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Filter } from '../../store/actionTypes'
import { filterTodo, clearCompletedTodo } from '../../store/actions'
import './index.scss'
const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = Filter

class FooterComponent extends Component {
  // 筛选数据
  getFilteData = (type) => {
    this.props.filterTodo(type)
  }
  // 清除已完成
  handleClear = () => {
    this.props.clearCompletedTodo()
  }
  render() {
    const { todos } = this.props
    let itemLeftNum = todos.filter(todo => { return !todo.isFinish }).length
    return (
      todos.length > 0
        ? <div className='todo_filter'>
          <span>{itemLeftNum > 1 ? `${itemLeftNum} items left` : `${itemLeftNum} item left`}</span>
          <span onClick={() => this.getFilteData(SHOW_ALL)}>All</span>
          <span onClick={() => this.getFilteData(SHOW_ACTIVE)} >Active</span>
          <span onClick={() => this.getFilteData(SHOW_COMPLETED)} >Completed</span>
          <span onClick={() => this.handleClear()} className={todos.some(todo => { return todo.isFinish }) ? 'vis_ab' : 'vis_hd'}>Clear completed</span>
        </div>
        : ''
    )
  }
}
const mapStateToProps = state => ({
  todos: state.todos
})

const Footer = connect(
  mapStateToProps,
  { filterTodo, clearCompletedTodo }
)(FooterComponent)
export default Footer
