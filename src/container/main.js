import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home'
import App from './Todo/App'
import Other from './Other'
import Nav from './Nav'
import NotFound from './NotFound'
import Time from './Time'
const Main = () => (
	<Router>
		<div>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/app' component={App} />
				<Route path='/other' component={Other} />
				<Route path='/time' component={Time} />
				<Route path='/NotFound' component={NotFound} />
				<Redirect to='/NotFound' />
			</Switch>
		</div>
	</Router>
)
export default Main
