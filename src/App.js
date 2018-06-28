import React, { Component } from 'react'
import './App.scss'
import Header from './components/Header'
import ItemList from './components/ItemList'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className='todo_board'>
        <h1>TODOs</h1>
        <Header />
        <ItemList />
        <Footer />
      </div>
    )
  }
}

export default App