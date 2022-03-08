import * as React from 'react'
import * as d3 from 'd3'

export const useD3 = (renderChartFn, deps) => {
  const ref = React.useRef()

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current))
  }, [renderChartFn, deps])

  return ref
}
