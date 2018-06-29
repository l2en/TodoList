import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Filter } from '../../store/actionTypes'
import { filterTodo, clearCompletedTodo } from '../../store/actions'
import './index.scss'
import * as _ from 'lodash'

class ObjectToArray {
  constructor(obj) {
    if (!_.isObject(obj)) return;
    let convertedArr = []
    for (let key in obj) {
      convertedArr.push(obj[key])
    }
    return convertedArr
  }
}

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
    const { todos, filter } = this.props,
      filterType = new ObjectToArray(Filter),
      element = (
        filterType.map(type =>
          <span key={type} onClick={() => this.getFilteData(type)} className={filter === type ? 'todo_filter_active':''}>{type}</span>
        )
      )
    let itemLeftNum = todos.filter(todo => !todo.isFinish).length


    return (
      todos.length > 0
        ? <div className='todo_filter'>
          <span>{itemLeftNum > 1 ? `${itemLeftNum} items left` : `${itemLeftNum} item left`}</span>
          {element}
          <span onClick={() => this.handleClear()} className={todos.some(todo => { return todo.isFinish }) ? 'vis_ab' : 'vis_hd'}>Clear completed</span>
        </div>
        : ''
    )
  }
}
const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

const Footer = connect(
  mapStateToProps,
  { filterTodo, clearCompletedTodo }
)(FooterComponent)
export default Footer
