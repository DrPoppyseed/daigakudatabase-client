// @flow
import * as React from 'react'
import * as d3 from 'd3'
import {useD3} from '../../../hooks/useD3'
import data from '../../../data/admissionScores.json'

type Props = {
  height: number,
  width: number,
  score: number,
  percentile?: string,
  identifier: string,
  ipeds_unitid: string
}

const D3TestscoresViz = (props: Props) => {
  const {
    height: _height,
    width: _width,
    score,
    percentile = 'sat_75th',
    identifier,
    ipeds_unitid
  } = props
  const ref = useD3(svg => {
    const margin = {
      top: 10, right: 5, bottom: 60, left: 40
    }
    const width = _width - margin.left - margin.right
    const height = _height - margin.top - margin.bottom

    svg.selectAll('*').remove()
    svg.select(identifier)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const x = d3.scaleLinear()
      .domain([600, d3.max(data.sat_75th)])
      .range([0, width])
    svg.append("g")
      .attr('class', 'x axis')
      .attr("transform", `translate(${margin.left}, ${height + margin.top})`)
      .call(d3.axisBottom(x).tickFormat(t => `${t.toLocaleString()}点`))
      .selectAll('text')
      .attr('dx', '-.8em')
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-60)')

    const histogram = d3.histogram()
      .value(d => d)
      .domain(x.domain())
      .thresholds(x.ticks(15))

    const bins = histogram(data[percentile])

    const y = d3.scaleLinear()
      .domain([0, d3.max(bins, d => d.length)])
      .range([height, 0])
    svg.append("g")
      .call(d3.axisLeft(y).tickFormat(t => `${t}校`))
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    svg.selectAll('rect')
      .data(bins)
      .join("rect")
      .attr("x", 1)
      .attr('opacity', 0.5)
      .attr("transform", function (d) {
        return `translate(${x(d.x0) + margin.left}, ${y(d.length) + margin.top})`
      })
      .attr("width", function (d) {
        return x(d.x1) - x(d.x0) - 2
      })
      .attr("height", function (d) {
        return height - y(d.length)
      })
      .style('fill', '#69b3a2')

    const scoreXPos = score / d3.max(data[percentile]) * width

    svg
      .append("line")
      .attr("x1", scoreXPos)
      .attr("x2", scoreXPos)
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke", "green")
      .attr('stroke-width', 3)
      .attr('class', `${identifier}-testscoresPermVLine`)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    let pathLine = svg.append('path')
      .datum(bins)
      .attr('fill', 'none')
      .attr('opacity', 0.5)
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line().curve(d3.curveBasis).x(d => x(d.x0) + (x(d.x1) - x(d.x0)) / 2).y(d => y(d.length)))
      .attr('transform', `translate(${margin.left}, ${margin.top - 5})`)

    let circle, pos
    svg.append("line")
      .attr('x1', 0)
      .attr('x2', 0)
      .attr('y1', 0)
      .attr('y2', height)
      .attr('stroke', 'brown')
      .attr('class', `${identifier}-testscoresVerticalLine`)
      .attr('z-index', 999)

      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    svg.append('text')
      .attr('text-anchor', 'start')
      .attr('font-size', 10)
      .attr('x', 50)
      .attr('y', 20)
      .text(`当校：${score}点`)

    svg.append('text')
      .attr('text-anchor', 'start')
      .attr('font-size', 10)
      .attr('x', 50)
      .attr('y', 35)
      .attr('class', `${identifier}-currentNumSchoolsText`)

    circle = svg.append('circle')
      .attr('opacity', 0)
      .attr('r', 4)
      .attr('opacity', 0.6)
      .attr('fill', 'darkred')
      .attr('z-index', 999)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    svg.on('mousemove', e => {
      let xPos = e.pageX - document.getElementById(`${ipeds_unitid}-testscoresVizSvg`).getBoundingClientRect().x - 40
      let currentNumSchoolsText = ''

      if (xPos >= 0 && xPos < width) {
        d3.select(`.${identifier}-testscoresVerticalLine`)
          .attr('transform', `translate(${margin.left + xPos}, ${margin.top})`)
        let pathLength = pathLine.node().getTotalLength()
        let x = xPos
        let beginning = x,
          end = pathLength,
          target
        while (true) {
          target = Math.floor((beginning + end) / 2)
          pos = pathLine.node().getPointAtLength(target)
          if ((target === end || target === beginning) && pos.x !== x) {
            break
          }
          if (pos.x > x) end = target
          else if (pos.x < x) beginning = target
          else break
        }
        circle.attr('opacity', 1)
          .attr('cx', x)
          .attr('cy', pos.y - 5)
        currentNumSchoolsText = `約${Math.floor((height - pos.y) * 1.5)}校`
        d3.select(`.${identifier}-currentNumSchoolsText`)
          .text(currentNumSchoolsText)
      }
    })
  }, [])

  return <svg ref={ref} height={_height} width={_width} id={`${ipeds_unitid}-testscoresVizSvg`}/>
}

export default D3TestscoresViz