import { styled, Typography } from '@mui/material'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { Theme } from '@mui/system'
import D3TestscoresGraph from './D3TestscoresGraph'
import D3TuitionGraph from './D3TuitionGraph'
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
}) => (
  <Root className={`D3GraphContainer-${unitid}`}>
    <div>
      <Typography variant='caption'>
        <FormattedMessage id='school_card.datacard.tuition_and_testscores_graph.title.sat' />
      </Typography>
      {admissions.sat.eng_25th_percentile === null ? (
        <NoDataText />
      ) : (
        <D3TestscoresGraph
          width={220}
          height={210}
          score={
            admissions.sat.eng_75th_percentile +
            admissions.sat.math_75th_percentile
          }
          identifier={`D3GraphContainer-${unitid}`}
          percentile='sat_75th'
          ipeds_unitid={unitid}
        />
      )}
    </div>
    <div>
      <Typography variant='caption'>
        <FormattedMessage id='school_card.datacard.tuition_and_testscores_graph.title.tuition' />
      </Typography>
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
  </Root>
)

const Root = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  padding: theme.spacing(0.5),
  height: 210,
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'space-around',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 260,
    display: 'flex',
    alignItems: 'flex-start',
    overflowX: 'auto',
    paddingLeft: theme.spacing(10),
  },
}))

export default TuitionAndTestscoresGraph
