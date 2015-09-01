import React from 'react'

/**
 * Injects random, changing data in its children as `data` prop.
 */
export default  React.createClass({
  displayName: 'RandomDataGenerator',

  getInitialState () {
    return {
      interval: 1000,
      data: [
        { id: 0, name: 'A', value: Math.random() },
        { id: 1, name: 'B', value: Math.random() },
        { id: 2, name: 'C', value: Math.random() },
        { id: 3, name: 'D', value: Math.random() },
        { id: 4, name: 'E', value: Math.random() },
        { id: 5, name: 'F', value: Math.random() },
        { id: 6, name: 'G', value: Math.random() },
        { id: 7, name: 'H', value: Math.random() },
        { id: 8, name: 'I', value: Math.random() },
        { id: 9, name: 'J', value: Math.random() }
      ]
    }
  },

  componentDidMount () {
    setInterval(() => {
      if (this.isMounted()) {
        this.setState(this.getInitialState())
      }
    }, this.state.interval)
  },

  render () {
    var children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {data: this.state.data})
    })
    return (
      <div className='randomDataGenerator'>
        {children}
      </div>
    )
  }
})
