import * as React from 'react'
import * as d3 from 'd3'
import { useD3 } from '@/hooks/useD3'
import data from '@/data/tuition.json'

const D3TuitionGraph = props => {
  const {
    height: _height,
    width: _width,
    identifier,
    tuition,
    ticks = 10,
    ipeds_unitid,
  } = props
  const ref = useD3(svg => {
    const margin = {
      top: 10,
      right: 5,
      bottom: 60,
      left: 40,
    }
    const width = _width - margin.left - margin.right
    const height = _height - margin.top - margin.bottom

    svg.selectAll('*').remove()
    svg
      .select(identifier)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data.out_of_state.tuition['2019'])])
      .range([0, width])
    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(${margin.left}, ${height + margin.top})`)
      .call(d3.axisBottom(x).tickFormat(t => `$${t.toLocaleString()}`))
      .selectAll('text')
      .attr('dx', '-.8em')
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-60)')

    const histogram = d3
      .histogram()
      .value(d => d)
      .domain(x.domain())
      .thresholds(x.ticks(ticks))

    const bins = histogram(data.out_of_state.tuition['2019'])

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .range([height, 0])
    svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .call(d3.axisLeft(y).tickFormat(t => `${t}校`))

    svg
      .selectAll('rect')
      .data(bins)
      .join('rect')
      .attr('opacity', 0.5)
      .attr('x', 1)
      .attr('transform', (d) => `translate(${
          x(d.x0) + margin.left
        }, ${y(d.length) + margin.top})`)
      .attr('width', (d) => x(d.x1) - x(d.x0) - 2)
      .attr('height', (d) => height - y(d.length))
      .style('fill', '#69b3a2')

    const pathLine = svg
      .append('path')
      .datum(bins)
      .attr('fill', 'none')
      .attr('opacity', '0.5')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        d3
          .line()
          .curve(d3.curveBasis)
          .x(d => x(d.x0) + (x(d.x1) - x(d.x0)) / 2)
          .y(d => y(d.length))
      )
      .attr('transform', `translate(${margin.left}, ${margin.top - 5})`)

    let circle
    let pos
    svg
      .append('line')
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', height)
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('z-index', 999)
      .attr('class', `${identifier}-verticalLine`)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const tuitionXPos =
      (tuition / d3.max(data.out_of_state.tuition['2019'])) * width

    svg
      .append('line')
      .attr('x1', tuitionXPos)
      .attr('x2', tuitionXPos)
      .attr('y1', 0)
      .attr('y2', height)
      .attr('opacity', 0.6)
      .attr('stroke', 'green')
      .attr('stroke-width', 3)
      .attr('z-index', 999)
      .attr('class', `${identifier}-permVerticalLine`)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('font-size', 10)
      .attr('x', 200)
      .attr('y', 20)
      .text(`当校の学費：$${tuition.toLocaleString()}`)

    svg
      .append('text')
      .attr('text-anchor', 'end')
      .attr('font-size', 10)
      .attr('x', 200)
      .attr('y', 35)
      .attr('class', `${identifier}-currentRangeText`)

    circle = svg
      .append('circle')
      .attr('opacity', 0)
      .attr('r', 4)
      .attr('opacity', 0.6)
      .attr('fill', 'steelblue')
      .attr('z-index', 999)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    svg.on('mousemove', e => {
      const xPos =
        e.pageX -
        document
          .getElementById(`${ipeds_unitid}-tuitionVizSvg`)
          .getBoundingClientRect().x -
        40
      let currentRangeText = '-'
      if (xPos >= 0 && xPos < width) {
        d3.select(`.${identifier}-verticalLine`).attr(
          'transform',
          `translate(${margin.left + xPos}, ${margin.top})`
        )
        const pathLength = pathLine.node().getTotalLength()
        const x = xPos
        let beginning = x
        let end = pathLength
        let target
        while (true) {
          target = Math.floor((beginning + end) / 2)
          pos = pathLine.node().getPointAtLength(target)
          if ((target === end || target === beginning) && pos.x !== x) {
            break
          }
          if (pos.x > x) end = target
          else if (pos.x < x) beginning = target
          else break // position found
        }
        circle
          .attr('opacity', 1)
          .attr('cx', x)
          .attr('cy', pos.y - 5)
        currentRangeText = `約${Math.floor((height - pos.y) * 7.5)}校`
        d3.select(`.${identifier}-currentRangeText`).text(currentRangeText)
      }
    })
  }, [])

  return (
    <svg
      ref={ref}
      height={_height}
      width={_width}
      id={`${ipeds_unitid}-tuitionVizSvg`}
    />
  )
}

export default D3TuitionGraph
