import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from './Home'
import App from './Todo/App'
import Other from './Other'
import Nav from './Nav'
import NotFound from './NotFound'

const Main = () => (
	<Router>
		<div>
			<Nav />
			<Route exact path='/' component={Home} />
			<Route path='/app' component={App} />
			<Route path='/other' component={Other} />
			{/* <Route path='/NotFound' component={NotFound} />
			<Redirect to='/NotFound'/> */}
		</div>
	</Router>
)
export default Main
