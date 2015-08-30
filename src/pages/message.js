import React from 'react'

/**
 * A simple page rendering a header (h1) and a text paragraph.
 */
export default React.createClass({
  displayName: 'MessagePage',
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    )
  }
})
