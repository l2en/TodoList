import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './index.scss'
import SecMenu from '../SecMenu'
class Other extends Component {
  render() {
    let match = this.props.match
    const Sec = ({ match }) => (
      <h1>{match.params.sectype}</h1>
    )
    return (
      <div>
        <div className='test_wrapper'>
          <div className='test_item'><SecMenu /> </div>
          <div className='test_item'>
            <Switch>
              <Route path={`${match.path}/:sectype`} component={Sec} />
            </Switch></div>
        </div>
      </div>
    )
  }
}
export default Other