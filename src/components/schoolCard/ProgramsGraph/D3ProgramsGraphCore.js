import * as d3 from 'd3'

const D3ProgramsGraphCore = (
  svg,
  { width, height, data, unitid, highlighted }
) => {
  svg.selectAll('*').remove()

  const extensibleData = JSON.parse(JSON.stringify(data))

  const Tooltip = d3
    .select(`.programsViz-${unitid}`)
    .append('div')
    .attr('class', 'tooltip')

  svg
    .select('.programsVizContainer')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const simulation = d3
    .forceSimulation()
    .force(
      'forceX',
      d3
        .forceX()
        .strength(0.08)
        .x(width * 0.5)
    )
    .force(
      'forceY',
      d3
        .forceY()
        .strength(0.08)
        .y(height * 0.5)
    )
    .force(
      'center',
      d3
        .forceCenter()
        .x(width * 0.5)
        .y(height * 0.5)
    )
    .force('charge', d3.forceManyBody().strength(0))
    .force(
      'collide',
      d3.forceCollide().radius(d => d.radius * 80)
    )

  simulation.nodes(extensibleData).on('tick', () => {
    node.attr('cx', d => d.x).attr('cy', d => d.y)
  })

  let node = svg
    .append('g')
    .attr('class', 'node')
    .selectAll('circle')
    .data(extensibleData)
    .enter()
    .append('circle')
    .attr('class', 'circle')
    .attr('id', d => `circle-${unitid}-${d.cip}`)
    .attr('r', d => d.radius * 80)
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('fill', d => d.color)
    .attr('opacity', d =>
      `circle-${unitid}-${d.cip}` === highlighted ? 0.7 : 0.3
    )
    .on('mouseover', () => {
      Tooltip.style('display', 'block')
        .style('stroke-width', 3)
        .style('opacity', 1)
    })
    .on('mousemove', (e, d) => {
      Tooltip.html(`<p>${d.program_ja}</p>`)
        .style('left', `${e.pageX + 20}px`)
        .style('top', `${e.pageY + 10}px`)
    })
    .on('mouseleave', () => {
      Tooltip.style('display', 'none')
    })
}

export default D3ProgramsGraphCore
