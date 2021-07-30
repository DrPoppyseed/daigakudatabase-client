// @flow
import * as React from 'react'
import * as d3 from 'd3'
import {useD3} from '../../../hooks/useD3'
import "./styles.css"

type Props = {
  width: number,
  height: number,
  sex: Array,
  demographics: Object,
  identifier: string,
  highlightedRace: string,
}

const D3StudentsViz = (props: Props): React.Node => {
  const {
    height: _height,
    width: _width,
    sex,
    demographics,
    identifier,
    highlightedRace,
  } = props

  const ref = useD3(svg => {
      const margin = {
        top: 10, right: 10, bottom: 10, left: 10
      }
      const width = _width - margin.left - margin.right
      const height = _height - margin.top - margin.bottom
      const radius = Math.min(width, height) / 2 - margin.top - margin.bottom

      svg.selectAll('*').remove()

      const Tooltip = d3.select(`.${identifier}`)
        .append('div')
        .attr('class', 'studentsVizTooltip')

      svg.select(`.${identifier}`)
        .attr('height', _height)
        .attr('width', _width)

      let pie = d3.pie()
        .sort(null)
        .value(d => d.percentage)

      let demographicsData = pie(demographics)
      let sexData = pie(sex)

      let arc = d3.arc()
        .innerRadius(radius * 0.7)
        .outerRadius(radius)
        .cornerRadius(3)

      let innerArc = d3.arc()
        .innerRadius(radius * 0.4)
        .outerRadius(radius * 0.7)
        .cornerRadius(3)

      svg.selectAll('allSlices')
        .data(demographicsData)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => d.data.color)
        .attr('stroke', 'white')
        .attr('stroke-width', '2px')
        .attr('class', 'arcSlice')
        .attr('id', d => `slice-${identifier}-${d.data.race}`)
        .attr('transform', `translate(${width / 2}, ${height / 2})`)
        .attr('opacity', d => `slice-${identifier}-${d.data.race}` === highlightedRace ? 0.9 : 0.6)
        .on('mouseover', d => {
          Tooltip.style('display', 'block')
            .style('stroke-width', 2)
            .style('opacity', 1)
        })
        .on('mousemove', (e, d) => {
          Tooltip.html(`<p>${d.data.ja}：${d.data.percentage}%</p>`)
            .style('left', `${e.pageX + 20}px`)
            .style('top', `${e.pageY + 10}px`)
        })
        .on('mouseleave', d => {
          Tooltip.style('display', 'none')
        })

      svg.selectAll('allSlices')
        .data(sexData)
        .enter()
        .append('path')
        .attr('d', innerArc)
        .attr('fill', d => d.data.color)
        .attr('stroke', 'white')
        .attr('stroke-width', '2px')
        .attr('class', 'arcSlice')
        .attr('id', d => `slice-${identifier}-${d.data.sex}`)
        .attr('transform', `translate(${width / 2}, ${height / 2})`)
        .attr('opacity', 0.7)
        .on('mouseover', d => {
          Tooltip.style('display', 'block')
            .style('stroke-width', 2)
            .style('opacity', 1)
        })
        .on('mousemove', (e, d) => {
          Tooltip.html(`<p>${d.data.ja}：${d.data.percentage}%</p>`)
            .style('left', `${e.pageX + 20}px`)
            .style('top', `${e.pageY + 10}px`)
        })
        .on('mouseleave', d => {
          Tooltip.style('display', 'none')
        })

      svg.append('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 12)
        .attr('text-anchor', 'middle')
        .selectAll('text')
        .data(sexData)
        .join('text')
        .attr('transform', d => {
          console.log(innerArc.centroid(d))
          return (`translate(${innerArc.centroid(d)[0] + width / 2}, ${innerArc.centroid(d)[1] + height / 2})`)
        })
        .call(text => text.append('tspan'))
        .attr('y', '.4em')
        .text(d => d.data.ja === '男性' ? '男' : '女')

    }, [demographics, highlightedRace]
  )

  return <svg ref={ref} height={_height} width={_width}/>
}

export default D3StudentsViz