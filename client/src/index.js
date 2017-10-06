import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import { Router } from 'react-router-dom'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
  , document.getElementById('root'))

registerServiceWorker()
