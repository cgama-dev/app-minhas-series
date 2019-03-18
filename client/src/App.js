import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import NewSeries from './components/NewSeries'
import Series from './components/Series'
import EditSeries from './components/EditSeries'

import store from './redux/store'

import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">
                <div className="navbar-header page-scroll">
                  <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="/images/logo.png" height="30" />
                  </a>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/"><i className="glyphicon glyphicon-home"></i> Home</Link>
                    </li>
                    <li>
                      <Link to="/news"><i className="glyphicon glyphicon-film"></i> Nova Série</Link>
                    </li>
                    <li>
                      <Link to="/about"><i className="glyphicon glyphicon-question-sign"></i> Sobre</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route path='/series-edit/:id' component={EditSeries} />
              <Route path='/series/:genre' component={Series} />
              <Route exact path='/news' component={NewSeries} />
            </Switch>
          </div>
        </Router>

      </Provider>
    )
  }
}

export default App

