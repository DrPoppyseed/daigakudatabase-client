// @flow
import * as React from 'react'
import {List, ListItem, Typography, Tabs, Tab} from "@material-ui/core";
import D3ProgramsViz from "../D3ProgramsViz";
import D3TuitionViz from '../D3TuitionViz'
import D3TestscoresViz from '../D3TestscoresViz'
import useStyles from './styles'

type Props = {
  admissionsData: Object,
  tuitionData: Object,
  educationData: Object,
  ipeds_unitid: string
}

const D3GraphsContainer = (props: Props) => {
  const c = useStyles()
  const {
    admissionsData: admissions,
    tuitionData: tuition,
    educationData: education,
    ipeds_unitid
  } = props
  const score = admissions.sat.eng_75th_percentile + admissions.sat.math_75th_percentile

  const [activeGraph, setActiveGraph] = React.useState(0)
  const [highlighted, setHighlighted] = React.useState('')
  const [satPercentile, setSatPercentile] = React.useState('sat_75th')

  const handleActiveGraphChange = newValue => {
    if (newValue !== activeGraph)
      setActiveGraph(newValue)
  }

  const handleSatPercentileChange = newValue => {
    console.log('from handleSatPercentileChange')
  }

  return (
    <React.Fragment>
      <div className={c.tabs}>
        <button className={`${c.tab} ${activeGraph === 0 && c.active}`}
                onClick={() => handleActiveGraphChange(0)}>
          人気プログラム
        </button>
        <button className={`${c.tab} ${activeGraph === 1 && c.active}`}
                onClick={() => handleActiveGraphChange(1)}>
          テストと学費
        </button>
        <button className={`${c.tab} ${activeGraph === 2 && c.active}`}
                onClick={() => handleActiveGraphChange(2)}>
          生徒の人種内訳
        </button>
      </div>
      {
        activeGraph === 0 ? (
          education.program_sizes_ja.length ? (
            <div className={c.graphContainer}>
              <div className={c.programsNamesBlock}>
                <div className={`programsVizContainer programsViz-${ipeds_unitid}`}
                     style={{display: 'relative'}}>
                  <D3ProgramsViz
                    width={200}
                    height={150}
                    data={education.program_sizes_ja}
                    unitid={ipeds_unitid}
                    highlighted={highlighted}
                  />
                </div>
              </div>
              <List
                className={c.programsNamesContainer}>
                {education.program_sizes_ja.map((program, index) => {
                  const itemId = `circle-${ipeds_unitid}-${program.cip}`
                  return (
                    <ListItem
                      key={`${itemId}`}
                      className={c.programNameContainer}
                      button
                      onMouseEnter={() => setHighlighted(itemId)}
                      onMouseLeave={() => setHighlighted('')}
                    >
                      <Typography variant='caption'>{index + 1}位
                        - {parseFloat(program.percentage * 100).toFixed(1)}%: {program.program_ja}</Typography>
                    </ListItem>
                  )
                })}
              </List>
            </div>
          ) : (
            <div className={c.nullProgramsContainer}>
              データがありません。
            </div>
          )
        ) : (
          activeGraph === 1 ? (
            <div className={`${c.graphContainer} D3GraphContainer-${ipeds_unitid}`}>
              <div className={c.d3GraphContainer}>
                <Typography variant='caption'>SATの点数 - 合格者上位{satPercentile === 'sat_75th' ? '25' : '75'}%</Typography>
                {
                  admissions.sat.eng_25th_percentile === null ? (
                    <div className={c.nullGraphContainer}>
                      <Typography variant='caption'>
                        データがありません。
                      </Typography>
                    </div>
                  ) : (
                    <D3TestscoresViz
                      width={220}
                      height={200}
                      score={score}
                      identifier={`D3GraphContainer-${ipeds_unitid}`}
                      percentile={satPercentile}
                    />
                  )
                }
              </div>
              <div className={c.d3GraphContainer}>
                <Typography variant='caption'>学費</Typography>
                {
                  tuition.out_of_state['2019'].tuition === '-' || tuition.out_of_state['2019'].tuition === null ? (
                    <div className={c.nullGraphContainer}>
                      <Typography variant='caption'>
                        データがありません。
                      </Typography>
                    </div>
                  ) : (
                    <D3TuitionViz
                      width={220}
                      height={200}
                      identifier={`D3GraphContainer-${ipeds_unitid}`}
                      tuition={tuition.out_of_state['2019'].tuition}
                    />
                  )
                }
              </div>
            </div>
          ) : (
            <div className={c.graphContainer}>
            </div>
          )
        )
      }
    </React.Fragment>
  )
}

export default D3GraphsContainer