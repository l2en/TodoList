import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import './index.scss'

class Other extends Component {
  render() {
    let match = this.props.match
    const activeStyle = {
      color: 'rgb(87,87,97)',
      backgroundColor: '#ffffff'
    },
    Sec = ({match}) => (
      <h1>{match.params.secMenu}</h1>
    )
    return (
      <div>
        <div className='other_wrapper'>
          <div className='other_item'>
            <ul>
              <li><NavLink activeStyle={activeStyle} to={`${match.url}/secMenu1`}>secMenu1</NavLink></li>
              <li><NavLink activeStyle={activeStyle} to={`${match.url}/secMenu2`}>secMenu2</NavLink></li>
              <li><NavLink activeStyle={activeStyle} to={`${match.url}/secMenu3`}>secMenu3</NavLink></li>
            </ul>
          </div>
          <div className='other_item'>
            <Switch>
              <Route exact path={`${match.path}/:secMenu`} component={Sec} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
export default Other