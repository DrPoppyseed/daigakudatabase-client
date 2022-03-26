import * as React from 'react'
import * as d3 from 'd3'

export const useD3 = (renderChartFn: any, deps: any[]) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current))
  }, [renderChartFn, deps])

  return ref
}
