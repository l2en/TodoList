import React, { Component } from 'react'
import * as _ from 'lodash'
import './index.scss'

class TodoItem extends Component {
  state = {
    showEdit: false,
    editVal: this.props.todo.content
  }

  // 失去焦点
  handleBlur = () => {
    this.props.editTodo(this.props.todo.id, this.state.editVal)
    this.setState({
      showEdit: false
    })
  }

  handleChangeVal = (e) => {
    this.setState({
      editVal: e.target.value
    })
  }

  showEdit = () => {
    this.setState({
      showEdit: true
    })
  }
  // 修改todo
  handleEdit = (e) => {
    if (e.key === 'Enter') {
      if (_.trim(this.state.editVal)) {
        this.props.editTodo(this.props.todo.id, this.state.editVal)
      } else {
        this.props.deleteTodo(this.props.todo.id)
      }
      this.setState({
        showEdit: false
      })
    } else if (e.key === 'Escape') {
      this.setState({
        showEdit: false
      })
    }
  }
  // 完成
  handleOprate = () => {
    this.props.toggleTodo(this.props.todo.id)
  }
  render() {
    const { todo, deleteTodo } = this.props,
      { showEdit, editVal } = this.state
    return (
      showEdit
        ? <input type='text' autoFocus onBlur={this.handleBlur} onKeyDown={this.handleEdit} value={editVal} onChange={this.handleChangeVal} className='todo_list_li_display' />
        : <li className='todo_list' onDoubleClick={this.showEdit}>
          <span className='checkBox ml_10 mr_10' onClick={() => this.handleOprate()}>
            <i className={todo.isFinish ? 'iconfont' : 'vis_hd'}  >&#xe600;</i>
          </span>
          <p className={`ml_20 ${todo.isFinish ? 'todo_list_li_finished' :'todo_list_li'}`}>{todo.content}</p>
          <i className='iconfont todo_list_li_delete' onClick={() => deleteTodo(todo.id)}>&#xe621;</i>
        </li>
    )
  }
}

export default TodoItem
