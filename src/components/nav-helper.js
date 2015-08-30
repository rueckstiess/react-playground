import React from 'react'
import localLinks from 'local-links'
import app from 'ampersand-app'

/**
 * Attaches onClick handler and intercepts all clicks on links, checking
 * if they are local links, and if they are, sends them to the router
 * for internal handling. External links still redirect normally.
 */
export default React.createClass({
  displayName: 'NavHelper',

  onClick (event) {
    const pathname = localLinks.getLocalPathname(event)

    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  },

  render () {
    return (
      <div {...this.props} onClick={this.onClick}>
        {this.props.children}
      </div>
    )
  }
})
