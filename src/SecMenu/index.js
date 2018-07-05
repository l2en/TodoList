import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
class SecMenu extends Component {
  render() {
    return (
        <ul>
          <li><Link to={`/test/secMenu1`}>我是Test二级菜单1</Link></li>
          <li><Link to={`/test/secMenu2`}>我是Test二级菜单2</Link></li>
          <li><Link to={`/test/secMenu3`}>我是Test二级菜单3</Link></li>
        </ul>

    )
  }
}
export default SecMenu
