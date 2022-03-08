import * as React from 'react'
import { List, ListItem, Typography } from '@mui/material'
import D3ProgramsViz from '../D3ProgramsViz'
import D3TuitionViz from '../D3TuitionViz'
import D3TestscoresViz from '../D3TestscoresViz'
import D3StudentsViz from '../D3StudentsViz'
import useStyles from './styles'

const D3GraphsContainer = (props) => {
  // const xs_down = useMediaQuery(theme => theme.breakpoints.down('xs'))
  const c = useStyles()
  const {
    admissionsData: admissions,
    tuitionData: tuition,
    educationData: education,
    studentsData: students,
    ipeds_unitid,
  } = props
  const score =
    admissions.sat.eng_75th_percentile + admissions.sat.math_75th_percentile

  const [activeGraph, setActiveGraph] = React.useState(0)
  const [highlighted, setHighlighted] = React.useState('')
  const [highlightedRace, setHighlightedRace] = React.useState('')

  const cleanDemographicsData = (rawData) => {
    let colorsLookup = {
      white: '#9C27B0',
      black: '#00ACC1',
      hispanic: '#43A047',
      asian: '#F4511E',
      other: '#FDD835',
      international: '#455A64',
    }
    let ja_lookup = {
      white: '白人',
      black: '黒人',
      hispanic: 'ヒスパニック',
      asian: 'アジア系',
      other: 'その他',
      international: '留学生など',
    }
    let resData = []
    for (const [key, value] of Object.entries(rawData)) {
      resData.push({
        race: key,
        percentage: value,
        color: colorsLookup[key],
        ja: ja_lookup[key],
      })
    }
    return resData
  }

  const cleanSexData = (men, women) => {
    return [
      { sex: 'men', percentage: men, color: '#42A5F5', ja: '男性' },
      { sex: 'women', percentage: women, color: '#F4511E', ja: '女性' },
    ]
  }

  const handleActiveGraphChange = newValue => {
    if (newValue !== activeGraph) setActiveGraph(newValue)
  }

  return (
    <div className={c.d3GraphsContainer}>
      <div className={c.tabs}>
        <button
          className={`${c.tab} ${activeGraph === 0 && c.active}`}
          onClick={() => handleActiveGraphChange(0)}>
          人気
          <br className={c.mobileBreakLine} />
          プログラム
        </button>
        <button
          className={`${c.tab} ${activeGraph === 1 && c.active}`}
          onClick={() => handleActiveGraphChange(1)}>
          テストと
          <br className={c.mobileBreakLine} />
          学費
        </button>
        <button
          className={`${c.tab} ${activeGraph === 2 && c.active}`}
          onClick={() => handleActiveGraphChange(2)}>
          生徒人口
          <br className={c.mobileBreakLine} />
          の詳細
        </button>
      </div>
      {activeGraph === 0 ? (
        education.program_sizes_ja.length ? (
          <div className={`${c.graphContainer} ${c.programsContainer}`}>
            <div>
              <div
                className={`programsVizContainer programsViz-${ipeds_unitid}`}
                style={{ display: 'relative' }}>
                <D3ProgramsViz
                  width={200}
                  height={160}
                  data={education.program_sizes_ja}
                  unitid={ipeds_unitid}
                  highlighted={highlighted}
                />
              </div>
            </div>
            <List className={c.programsNamesContainer}>
              {education.program_sizes_ja.map((program, index) => {
                const itemId = `circle-${ipeds_unitid}-${program.cip}`
                return (
                  <ListItem
                    key={`${itemId}`}
                    className={c.programNameContainer}
                    button
                    onMouseEnter={() => setHighlighted(itemId)}
                    onMouseLeave={() => setHighlighted('')}>
                    <div
                      className={`${c.programNameColorBox} ${
                        itemId === highlighted ? c.squareActive : ''
                      }`}
                      style={{ backgroundColor: `${program.color}` }}
                    />
                    <Typography variant="caption">
                      {index + 1}位 -{' '}
                      {parseFloat(program.percentage * 100).toFixed(1)}%:{' '}
                      {program.program_ja}
                    </Typography>
                  </ListItem>
                )
              })}
            </List>
          </div>
        ) : (
          <div className={c.nullProgramsContainer}>データがありません。</div>
        )
      ) : activeGraph === 1 ? (
        <div
          className={`${c.graphContainer} D3GraphContainer-${ipeds_unitid} ${c.testscoresAndTuitionContainer}`}>
          <div>
            <Typography variant="caption">SATの点数 - 合格者上位25%</Typography>
            {admissions.sat.eng_25th_percentile === null ? (
              <div className={c.nullGraphContainer}>
                <Typography variant="caption">データがありません。</Typography>
              </div>
            ) : (
              <D3TestscoresViz
                width={220}
                height={210}
                score={score}
                identifier={`D3GraphContainer-${ipeds_unitid}`}
                percentile={'sat_75th'}
                ipeds_unitid={ipeds_unitid}
              />
            )}
          </div>
          <div>
            <Typography variant="caption">学費</Typography>
            {tuition.out_of_state['2019'].tuition === '-' ||
            tuition.out_of_state['2019'].tuition === null ? (
              <div className={c.nullGraphContainer}>
                <Typography variant="caption">データがありません。</Typography>
              </div>
            ) : (
              <D3TuitionViz
                width={220}
                height={210}
                identifier={`D3GraphContainer-${ipeds_unitid}`}
                tuition={tuition.out_of_state['2019'].tuition}
                ipeds_unitid={ipeds_unitid}
              />
            )}
          </div>
        </div>
      ) : (
        <div className={c.graphContainer}>
          {students.enrollment.men !== null ||
          students.enrollment.demographics.white !== null ? (
            <div className={c.studentsGraphContainer}>
              <div className={`D3StudentsGraphContainer-${ipeds_unitid}`}>
                <D3StudentsViz
                  height={210}
                  width={250}
                  sex={cleanSexData(
                    students.enrollment.men,
                    students.enrollment.women
                  )}
                  demographics={cleanDemographicsData(
                    students.enrollment.demographics
                  )}
                  identifier={`D3StudentsGraphContainer-${ipeds_unitid}`}
                  highlightedRace={highlightedRace}
                />
              </div>
              <div className={c.studentsTextBlock}>
                <Typography variant="caption">
                  生徒総数：{students.enrollment.size}人
                </Typography>
                <List className={c.raceNamesContainer}>
                  {cleanDemographicsData(students.enrollment.demographics).map(
                    d => {
                      const itemId = `slice-D3StudentsGraphContainer-${ipeds_unitid}-${d.race}`
                      return (
                        <ListItem
                          button
                          variant="caption"
                          className={c.raceNameContainer}
                          key={`${ipeds_unitid}-${d.race}`}
                          onMouseEnter={() => setHighlightedRace(itemId)}
                          onMouseLeave={() => setHighlightedRace('')}>
                          <div
                            className={c.raceIndicatorColorBox}
                            style={{ backgroundColor: `${d.color}` }}
                          />
                          <Typography variant="caption">
                            {d.ja}：{d.percentage}%
                          </Typography>
                        </ListItem>
                      )
                    }
                  )}
                </List>
              </div>
            </div>
          ) : (
            <div className={c.nullStudentsGraphContainer}>
              データがありません。
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default D3GraphsContainer
