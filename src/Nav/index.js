import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
class Nav extends Component {
  render() {
    return (
      <div>
        <div className='nav_wrapper'>
          <Link to='/'><span className='nav_bar'>Home</span></Link>
          <Link to='/app'><span className='nav_bar'>Todo</span></Link>
          <Link to='/other'><span className='nav_bar'>Other</span></Link>
        </div>
      </div>
    )
  }
}
export default Nav
