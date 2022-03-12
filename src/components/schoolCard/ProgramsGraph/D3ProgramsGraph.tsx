import * as React from 'react'
import { FC } from 'react'
import { useD3 } from '../../../hooks/useD3'
import './D3ProgramsGraphStyles.css'
import D3ProgramsGraphCore from './D3ProgramsGraphCore'

export interface D3ProgramsGraphProps {
  width: number
  height: number
  data: any
  unitid: string
  highlighted: string
}

const D3ProgramsGraph: FC<D3ProgramsGraphProps> = ({
  width = 200,
  height = 200,
  data,
  unitid,
  highlighted,
}) => {
  const ref = useD3(
    (svg: any) =>
      D3ProgramsGraphCore(svg, {
        width,
        height,
        unitid,
        data,
        highlighted,
      }),
    [data, highlighted]
  )

  return <svg ref={ref} height={height} width={width} />
}

export default D3ProgramsGraph
