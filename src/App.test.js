import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    div
  )
})

it('renders MyReads title', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    container
  )
  expect(container.querySelector('h1').textContent).toEqual('MyReads')
})

it('renders to search button title', () => {
  const container = document.createElement('div')
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    container
  )
  expect(container.querySelector('button').textContent).toEqual('Add a book')
})
