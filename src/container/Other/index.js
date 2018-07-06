import React, { Component } from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom'
import './index.scss'

class Other extends Component {
  render() {
    let match = this.props.match
    const activeStyle = {
      color: 'rgb(87,87,97)',
      backgroundColor: '#ffffff'
    },
    Sec = ({match}) => (
      <div>
          <h1>{match.params.secMenu}</h1>
          match.url:{match.url}<br/>
          match.path:{match.path}
      </div>
    ),
    SecDefault = () => (
      <h1>暂时没有东西</h1>
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
              <Route exact path={`${match.path}`} component={SecDefault} />
              <Route exact path={`${match.path}/:secMenu`} component={Sec} />
              <Redirect to={`${match.path}`}/>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
export default Other