import d3 from 'd3'
import D3Wrap from 'react-d3-wrap'
import debugFactory from 'debug'

import './bar.less'

const debug = debugFactory('yourapp:d3:bar')

export default class BarChart extends D3Wrap {

  initialize (svg, data, options) {
    this.scales = {
      x: d3.scale.ordinal(),
      y: d3.scale.linear()
    }

    this.g = d3.select(svg)
      .append('g')
      .attr('transform', `translate(${options.margin.left}, ${options.margin.top})`)
  }

  update (svg, data, options) {
    const {width, height} = this.props;
    const scales = this.scales;
    const g = this.g;
    const color = d3.scale.category20c()

    scales.x
      .rangeRoundBands([0, width], .1)
      .domain(data.map((d) => {
        return d.name
      }))

    scales.y
      .range([height, 0])
      .domain([0, d3.max(data, (d) => {
        return d.value
      })])

    let bars = g.selectAll('.bar')
      .data(data, (d) => {
        return d.id
      })

    // enter
    bars.enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => {
        return scales.x(d.name)
      })
      .attr('width', scales.x.rangeBand())
      .attr('y', height)
      .attr('height', 0)

    // update + enter
    bars
      .transition()
        .duration(1000)
        // .ease(d3.ease('bounce'))
        // .delay((d, i) => {
        //   return i*70;
        // })
      .attr('fill', (d, i) => {
        return color(i)
      })
      .attr('x', (d) => {
        return scales.x(d.name)
      })
      .attr('width', scales.x.rangeBand())
      .attr('y', (d) => {
        return scales.y(d.value)
      })
      .attr('height', (d) => {
        return height - scales.y(d.value)
      })

    // exit
    bars.exit()
      .transition()
        .duration(1000)
      .attr('y', height)
      .attr('height', 0)
      .remove()

  }

  destroy (svg, data, options) {
  }
}
