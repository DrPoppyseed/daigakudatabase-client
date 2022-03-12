import * as React from 'react'
import * as d3 from 'd3'
import { useD3 } from '../../../hooks/useD3'
import './D3StudentsGraphStyles.css'

const D3StudentsGraph = props => {
  const {
    height: _height,
    width: _width,
    sex,
    demographics,
    identifier,
    highlightedRace,
  } = props

  const ref = useD3(
    svg => {
      const margin = {
        top: 11,
        right: 11,
        bottom: 11,
        left: 11,
      }
      const width = _width - margin.left - margin.right
      const height = _height - margin.top - margin.bottom
      const radius = Math.min(width, height) / 2 - margin.top - margin.bottom

      const xTranslation = width / 2 + 25
      const yTranslation = height / 2 + 15

      svg.selectAll('*').remove()

      const Tooltip = d3
        .select(`.${identifier}`)
        .append('div')
        .attr('class', 'studentsVizTooltip')

      svg.select(`.${identifier}`).attr('height', _height).attr('width', _width)

      let pie = d3
        .pie()
        .sort(null)
        .value(d => d.percentage)

      let demographicsData = pie(demographics)
      let sexData = pie(sex)

      let arc = d3
        .arc()
        .innerRadius(radius * 0.6)
        .outerRadius(radius * 0.9)
        .cornerRadius(3)

      let innerArc = d3
        .arc()
        .innerRadius(radius * 0.3)
        .outerRadius(radius * 0.6)
        .cornerRadius(3)

      let labelArc = d3
        .arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9)

      svg
        .selectAll('allSlices')
        .data(demographicsData)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => d.data.color)
        .attr('class', 'arcSlice')
        .attr('id', d => `slice-${identifier}-${d.data.race}`)
        .attr('transform', `translate(${xTranslation}, ${yTranslation})`)
        .attr('opacity', d =>
          `slice-${identifier}-${d.data.race}` === highlightedRace ? 0.9 : 0.6
        )
        .on('mouseover', () => {
          Tooltip.style('display', 'block')
            .style('stroke-width', 2)
            .style('opacity', 1)
        })
        .on('mousemove', (e, d) => {
          Tooltip.html(`<p>${d.data.ja}：${d.data.percentage}%</p>`)
            .style('left', `${e.pageX + 20}px`)
            .style('top', `${e.pageY + 10}px`)
        })
        .on('mouseleave', () => {
          Tooltip.style('display', 'none')
        })

      svg
        .selectAll('allSlices')
        .data(sexData)
        .enter()
        .append('path')
        .attr('d', innerArc)
        .attr('fill', d => d.data.color)
        .attr('class', 'arcSlice')
        .attr('id', d => `slice-${identifier}-${d.data.sex}`)
        .attr('transform', `translate(${xTranslation}, ${yTranslation})`)
        .attr('opacity', 0.7)
        .on('mouseover', () => {
          Tooltip.style('display', 'block')
            .style('stroke-width', 2)
            .style('opacity', 1)
        })
        .on('mousemove', (e, d) => {
          Tooltip.html(`<p>${d.data.ja}：${d.data.percentage}%</p>`)
            .style('left', `${e.pageX + 20}px`)
            .style('top', `${e.pageY + 10}px`)
        })
        .on('mouseleave', () => {
          Tooltip.style('display', 'none')
        })

      svg
        .append('g')
        .attr('class', 'sexLabelText')
        .selectAll('text')
        .data(sexData)
        .join('text')
        .attr(
          'transform',
          d =>
            `translate(${innerArc.centroid(d)[0] + xTranslation}, ${
              innerArc.centroid(d)[1] + yTranslation
            })`
        )
        .call(text => text.append('tspan'))
        .attr('y', '.4em')
        .text(d => (d.data.ja === '男性' ? '男' : '女'))

      svg
        .selectAll('allPolylines')
        .data(demographicsData)
        .enter()
        .append('polyline')
        .attr('stroke', 'black')
        .style('fill', 'none')
        .attr('stroke-width', d => (d.data.percentage > 5 ? 1 : 0))
        .attr('points', d => {
          const posA = arc.centroid(d)
          const posB = labelArc.centroid(d)
          const posC = labelArc.centroid(d)
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          posC[0] = radius * 0.93 * (midangle < Math.PI ? 1 : -1)
          return [posA, posB, posC].map(pos => [
            pos[0] + xTranslation,
            pos[1] + yTranslation,
          ])
        })

      svg
        .selectAll('allLabels')
        .data(demographicsData)
        .enter()
        .append('text')
        .attr('class', 'demographicsLabelText')
        .text(d => (d.data.percentage > 5 ? d.data.ja : ''))
        .attr('transform', d => {
          let pos = labelArc.centroid(d)
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          pos[0] = radius * 0.94 * (midangle < Math.PI ? 1 : -1)
          return `translate(${pos[0] + xTranslation}, ${pos[1] + yTranslation})`
        })
        .style('text-anchor', d => {
          const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
          return midangle < Math.PI ? 'start' : 'end'
        })
    },
    [demographics, highlightedRace]
  )

  return <svg ref={ref} height={_height} width={_width} />
}

export default D3StudentsGraph
