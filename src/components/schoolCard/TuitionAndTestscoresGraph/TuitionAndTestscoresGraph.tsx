import { Typography } from '@mui/material'
import D3TestscoresGraph from './D3TestscoresGraph'
import D3TuitionGraph from './D3TuitionGraph'
import React, { FC } from 'react'
import useStyles from './TuitionAndTestscoresGraphStyles'
import clsx from 'clsx'
import NoDataText from './NoDataText'

export interface TuitionAndTestscoresGraphProps {
  admissions: any
  tuition: any
  unitid: string
}

const TuitionAndTestscoresGraph: FC<TuitionAndTestscoresGraphProps> = ({
  admissions,
  tuition,
  unitid,
}) => {
  const c = useStyles()

  const score =
    admissions.sat.eng_75th_percentile + admissions.sat.math_75th_percentile

  return (
    <div
      className={clsx(
        c.graphContainer,
        `D3GraphContainer-${unitid}`,
        c.testscoresAndTuitionContainer
      )}
    >
      <div>
        <Typography variant='caption'>SATの点数 - 合格者上位25%</Typography>
        {admissions.sat.eng_25th_percentile === null ? (
          <NoDataText />
        ) : (
          <D3TestscoresGraph
            width={220}
            height={210}
            score={score}
            identifier={`D3GraphContainer-${unitid}`}
            percentile={'sat_75th'}
            ipeds_unitid={unitid}
          />
        )}
      </div>
      <div>
        <Typography variant='caption'>学費</Typography>
        {tuition.out_of_state['2019'].tuition === '-' ||
        tuition.out_of_state['2019'].tuition === null ? (
          <NoDataText />
        ) : (
          <D3TuitionGraph
            width={220}
            height={210}
            identifier={`D3GraphContainer-${unitid}`}
            tuition={tuition.out_of_state['2019'].tuition}
            ipeds_unitid={unitid}
          />
        )}
      </div>
    </div>
  )
}

export default TuitionAndTestscoresGraph
