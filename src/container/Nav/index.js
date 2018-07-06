import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

class Nav extends Component {
  render() {
    const activeStyle = {
      color: 'rgb(87,87,97)',
      backgroundColor: '#ffffff'
    }
    return (
      <div>
        <div className='nav_wrapper'>
          <NavLink exact activeStyle={activeStyle} to='/'>Home</NavLink>
          <NavLink activeStyle={activeStyle} to='/app'>Todo</NavLink>
          <NavLink activeStyle={activeStyle} to='/other'>Other</NavLink>
        </div>
      </div>
    )
  }
}
export default Nav
