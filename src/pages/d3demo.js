import React from 'react'
import RandomDataGenerator from '../components/random-data'
import BarChart from '../d3/bar'

/**
 * The d3 demo page.
 */
export default React.createClass({
  displayName: 'D3DemoPage',
  render () {
    return (
      <div>
        <h1>React with d3 demo</h1>
        <p>this is a hot-loadable react component that renders d3 inside. Go ahead, change the
        code in <code>src/d3/bar.js</code>, hit save, and see what happens.</p>
        <RandomDataGenerator>
          <BarChart className="BarChart" width={400} height={300}/>
        </RandomDataGenerator>
      </div>
    )
  }
})
