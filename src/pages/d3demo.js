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
        code, hit save, and see what happens.</p>

        <h4>Example: Change Color</h4>
        <p>For example, in <code>src/d3/bar.js</code>, replace the color palette with
        <code>category20b()</code> at the end of this line</p>
        <pre>
        const color = d3.scale.category20c()
        </pre>

        <h4>Example: Manipulate Data</h4>
        <p>Or, in <code>src/components/random-data.js</code>, add or remove some of the <code>data</code>
        lines.</p>

        <RandomDataGenerator>
          <BarChart className="BarChart" width={400} height={300}/>
        </RandomDataGenerator>
      </div>
    )
  }
})
