// @flow
import * as React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Card, IconButton, List, ListItem, ListItemText} from '@material-ui/core'
import D3ProgramsViz from './D3ProgramsViz'
import useStyles from './styles'
import './styles.css'

type Props = {
  general: any
}

const HomeSchoolCard = (props: Props): React.Node => {
  const c = useStyles()
  const {
    name_en,
    education,
    campus,
    classifications,
    tuition,
    admissions,
    ipeds_unitid
  } = props.general
  const [highlighted, setHighlighted] = React.useState('')

  return (
    <Card className={c.cardContainer}>
      <div className={c.titleBlock}>
        <div className={c.titleContainer}>
          <div className={c.logoContainer}>
          </div>
          <Typography variant='h6'>
            {name_en} - {ipeds_unitid}
          </Typography>
        </div>
      </div>
      <div className={c.bodyBlock}>
        <div className={c.datacardsBlock}>
          <div className={c.datacardsContainer}>
            <div className={c.datacardContainer}>
              <div className={c.datacardTitleContainer}>
                <Typography variant='button'>学校概要</Typography>
              </div>
              <div className={c.datacardBodyContainer}>
                <div className={c.datacardSummaryItem}>
                  <Typography variant='caption'>
                    設置形態：{campus.control_ja} ・ 学期制：{education.calendar_system_ja}
                  </Typography>
                </div>
                <div className={c.datacardSummaryItem}>
                  <Typography variant='caption'>{campus.state_ja}州（{campus.region_ja}）</Typography>
                </div>
                {
                  classifications !== undefined ? (
                    <React.Fragment>
                      <div className={c.datacardSummaryItem}>
                        <Typography variant='caption'>学校の分類規模：{classifications.carnegie_size_category_ja}</Typography>
                      </div>
                      <div className={c.datacardSummaryItem}>
                        <Typography
                          variant='caption'>学校のカーネギー分類：{classifications.carnegie_classification_ja}</Typography>
                      </div>
                    </React.Fragment>
                  ) : (
                    <div>ー</div>
                  )
                }
              </div>
            </div>
            <div className={c.datacardContainer}>
              <div className={c.datacardTitleContainer}>
                <Typography variant='button'>テストと学費</Typography>
              </div>
              <div className={c.datacardBodyContainer}>
                {
                  tuition !== undefined ? (
                    <Typography variant='caption'>
                      州外生徒の平均学費： ${new Intl.NumberFormat().format(tuition['out_of_state'][2019]['tuition'])}
                    </Typography>
                  ) : (
                    <Typography variant='caption'>
                      州外生徒の平均学費：ー
                    </Typography>
                  )
                }
                {
                  admissions !== undefined ? (
                    admissions.act.comp_25th_percentile === null ? (
                      <React.Fragment>
                        <Typography variant='caption'>
                          入学者のACT点数の範囲：ー
                        </Typography>
                        <Typography variant='caption'>
                          入学者のSAT点数の範囲：ー
                        </Typography>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <Typography variant='caption'>
                          入学者のACT点数の範囲： {admissions.act.comp_25th_percentile} ~ {admissions.act.comp_75th_percentile}
                        </Typography>
                        <Typography variant='caption'>
                          入学者のSAT点数の範囲： {admissions.sat.eng_25th_percentile + admissions.sat.math_25th_percentile} ~
                          {admissions.sat.eng_75th_percentile + admissions.sat.math_75th_percentile}
                        </Typography>
                      </React.Fragment>
                      )
                  ) : (
                    <React.Fragment>
                      <Typography variant='caption'>
                        入学者のACT点数の範囲：ー
                      </Typography>
                      <Typography variant='caption'>
                        入学者のSAT点数の範囲：ー
                      </Typography>
                    </React.Fragment>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        {/* TODO: graphsContainer
        + highlight data point according to filtering criteria
        1. 学校の概要 - School Summary
        2. テストと学費　- Scores & tuition
        3. ランキング - school rankings
        4. 人気のプログラム - popular programs
       */}
        <div className={c.graphsBlock}>
          <div className={c.programsGraphContainer}>
            <div className={c.programsNamesBlock}>
              <div className={c.programsTitleContainer}>
                <Typography variant='button'>人気のプログラム</Typography>
              </div>
              <div className={`programsVizContainer programsViz-${ipeds_unitid}`} style={{display: 'relative'}}>
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
        </div>
      </div>
    </Card>
  )
}
export default HomeSchoolCard