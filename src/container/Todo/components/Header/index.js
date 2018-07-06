import React, { Component } from 'react'
import * as _ from 'lodash'
import { connect } from 'react-redux'
import { addTodo, completedAllTodo } from '../../../../store/actions'
import uuid from 'uuid4'
import './index.scss'

class Todo {
  constructor(content) {
    this.content = content
    this.id = uuid()
    this.isFinish = false
  }
}

class TodoTextInput extends Component {
  state = {
    inputVal: ''
  }

  handleAdd = (e) => {
    if (e.key === 'Enter') {
      if (!_.trim(this.state.inputVal)) return alert('添加todo不能为空!');
      this.props.addTodo(new Todo(this.state.inputVal))
      this.setState({
        inputVal: ''
      })
    }
  }
  handleChangeVal = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }
  // 全选
  handleSelectAll =()=>{
    this.props.completedAllTodo()
  }
  render() {
    const { hasTodoItem, isAllFinished } = this.props
    return (
      <div className='todo_header'>
        <div className={`todo_header_selectAllCircle ml_10 mr_10 ${hasTodoItem ? 'vis_ab' : 'vis_hd'}`} onClick={this.handleSelectAll}>
					<i className={`iconfont ${isAllFinished ? 'todo_header_selectAll':'todo_header_unselectAll '}`}>&#xe600;</i> 
				</div>
        <input type='text' className='todo_header_input' value={this.state.inputVal} onKeyDown={this.handleAdd} onChange={this.handleChangeVal} placeholder='What needs to be done ?' />
      </div>
    )
  }
}
const mapStateToProps = state => ({
  hasTodoItem: state.todos.length > 0,
  isAllFinished: state.todos.filter(todo => {return todo.isFinish}).length === state.todos.length
})
const Header = connect(mapStateToProps, { addTodo, completedAllTodo })(TodoTextInput)
export default Header
