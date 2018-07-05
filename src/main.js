import React from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Home from './Home'
import App from './App'
import Nav from './Nav'
import Other from './Other'
import NotFound from './NotFound'
const Main = () => (
    <Router>
			<div>
				<Nav/>
				<Route exact path='/' component={Home} />
				<Route path='/app' component={App} />
				<Route path='/other' component={Other} />
				<Redirect from='*' component={NotFound} />
			</div>
    </Router>
)
export default Main
