// @flow
import * as React from 'react'
import * as d3 from 'd3'
import {useD3} from '../../../hooks/useD3'

type Props = {
  width: number,
  height: number,
  data: Array,
  unitid: string
}

const D3ProgramsViz = (props: Props) => {
  const {
    width = 200,
    height = 200,
    data,
    unitid,
    highlighted
  } = props

  const ref = useD3(
    svg => {
      svg.selectAll('*').remove()
      // d3.select(`.programsViz-${unitid}`).remove()

      const Tooltip = d3.select(`.programsViz-${unitid}`)
        .append('div')
        .attr('class', 'tooltip')

      svg.select('.programsVizContainer')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      console.log(data)

      let simulation = d3.forceSimulation()
        .force("forceX", d3.forceX().strength(.1).x(width * .5))
        .force("forceY", d3.forceY().strength(.1).y(height * .5))
        .force("center", d3.forceCenter().x(width * .5).y(height * .5))
        .force("charge", d3.forceManyBody().strength(5))
        .force('collide', d3.forceCollide().radius(d => d.radius * 80))

      simulation.nodes(data)
        .on('tick', d => {
          node.attr('cx', d => d.x)
            .attr('cy', d => d.y)
        })

      let node = svg.append('g')
        .attr('class', 'node')
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'circle')
        .attr('id', d => `circle-${unitid}-${d.cip}`)
        .attr('r', d => d.radius * 80)
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr("stroke", "black")
        .style("stroke-width", 1)
        .attr('fill', d => d.color)
        .attr('opacity', d => `circle-${unitid}-${d.cip}` === highlighted ? 0.7 : 0.3)
        .on("mouseover", (d) => {
          Tooltip.style('display', 'block')
            .style('stroke-width', 3)
            .style('opacity', 1)
        })
        .on('mousemove', (e, d) => {
          Tooltip.html(`<p>${d.program_ja}</p>`)
            .style('left', e.pageX + 20 + 'px')
            .style('top', e.pageY + 10 + 'px')
        })
        .on("mouseleave", (d) => {
          Tooltip.style('display', 'none')
        })

    }, [data, highlighted]
  )

  return <svg ref={ref} height={height} width={width}/>
}

export default D3ProgramsViz