// @flow
import * as React from 'react'
import {List, ListItem, Typography} from "@material-ui/core";
import D3ProgramsViz from "../D3ProgramsViz";
import D3TuitionViz from '../D3TuitionViz'
import D3TestscoresViz from '../D3TestscoresViz'
import D3StudentsViz from '../D3StudentsViz'
import useStyles from './styles'

type Props = {
  admissionsData: Object,
  tuitionData: Object,
  educationData: Object,
  studentsData: Object,
  ipeds_unitid: string
}

const D3GraphsContainer = (props: Props) => {
  const c = useStyles()
  const {
    admissionsData: admissions,
    tuitionData: tuition,
    educationData: education,
    studentsData: students,
    ipeds_unitid
  } = props
  const score = admissions.sat.eng_75th_percentile + admissions.sat.math_75th_percentile

  const [activeGraph, setActiveGraph] = React.useState(0)
  const [highlighted, setHighlighted] = React.useState('')
  const [highlightedRace, setHighlightedRace] = React.useState('')
  const [highlightedSex, setHighlightedSex] = React.useState('')
  const [satPercentile, setSatPercentile] = React.useState('sat_75th')

  const cleanDemographicsData = (rawData: Object): Array => {
    let colorsLookup = {
      white: '#9C27B0',
      black: '#00ACC1',
      hispanic: '#43A047',
      asian: '#F4511E',
      other: '#FDD835',
      international: '#455A64'
    }
    let ja_lookup = {
      white: '白人',
      black: '黒人',
      hispanic: 'ヒスパニック系',
      asian: 'アジア系',
      other: 'その他',
      international: '留学生など'
    }
    let resData = []
    for (const [key, value] of Object.entries(rawData)) {
      resData.push({
        'race': key,
        'percentage': value,
        'color': colorsLookup[key],
        'ja': ja_lookup[key]
      })
    }
    console.log(resData)
    return resData
  }

  const cleanSexData = (men, women): Array => {
    return [
      {'sex': 'men', 'percentage': men, 'color': '#42A5F5', 'ja': '男性'},
      {'sex': 'women', 'percentage': women, 'color': '#F4511E', 'ja': '女性'}
    ]
  }

  const handleActiveGraphChange = newValue => {
    if (newValue !== activeGraph)
      setActiveGraph(newValue)
  }

  const handleSatPercentileChange = newValue => {
    console.log('from handleSatPercentileChange')
    if (newValue !== highlightedRace) {
      setHighlightedRace(newValue)
    }
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
          生徒人口の詳細
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
                      <div
                        className={`${c.programNameColorBox} ${itemId === highlighted ? c.squareActive : ''}`}
                        style={{backgroundColor: `${program.color}`}}
                      />
                      <Typography variant='caption'>
                        {index + 1}位
                        - {parseFloat(program.percentage * 100).toFixed(1)}%: {program.program_ja}
                      </Typography>
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
              {
                students.enrollment.men !== null || students.enrollment.demographics.white !== null ? (
                  <div className={c.studentsGraphContainer}>
                    <div className={`${c.d3GraphContainer} D3StudentsGraphContainer-${ipeds_unitid}`}>
                      <D3StudentsViz
                        height={200}
                        width={200}
                        sex={cleanSexData(students.enrollment.men, students.enrollment.women)}
                        demographics={cleanDemographicsData(students.enrollment.demographics)}
                        identifier={`D3StudentsGraphContainer-${ipeds_unitid}`}
                        highlightedRace={highlightedRace}
                      />
                    </div>
                    <div className={c.studentsTextBlock}>
                      <Typography variant='caption'>生徒総数：{students.enrollment.size}人</Typography>
                      <List
                        className={c.raceNamesContainer}
                      >
                        {
                          cleanDemographicsData(students.enrollment.demographics).map(d => {
                            const itemId = `slice-D3StudentsGraphContainer-${ipeds_unitid}-${d.race}`
                            return (
                              <ListItem
                                button
                                variant='caption'
                                className={c.raceNameContainer}
                                key={`${ipeds_unitid}-${d.race}`}
                                onMouseEnter={() => handleSatPercentileChange(itemId)}
                                onMouseLeave={() => handleSatPercentileChange('')}
                              >
                                <div
                                  className={c.raceIndicatorColorBox}
                                  style={{backgroundColor: `${d.color}`}}/>
                                <Typography variant='caption'>
                                  {d.ja}：{d.percentage}%
                                </Typography>
                              </ListItem>
                            )
                          })
                        }
                      </List>
                    </div>
                  </div>
                ) : (
                  <div className={c.nullStudentsGraphContainer}>
                    データがありません。
                  </div>
                )
              }
            </div>
          )
        )
      }
    </React.Fragment>
  )
}

export default D3GraphsContainer