import React from 'react'
import NavHelper from './components/nav-helper'

var $ = window.jQuery = window.$ = require('jquery');
require('bootstrap/js/dropdown');
require('bootstrap/js/collapse');
require('bootstrap/js/tooltip');

// set your debug string accordingly
window.localStorage.debug = 'yourapp:*'

export default React.createClass({
  displayName: 'Layout',
  render () {
    return (
      <NavHelper>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">React Playground</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><a href="/d3">d3 Demo</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
