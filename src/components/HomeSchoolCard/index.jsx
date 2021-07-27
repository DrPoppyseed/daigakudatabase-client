// @flow
import * as React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Card, IconButton} from '@material-ui/core'
import * as d3 from 'd3'
import useStyles from './styles'

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
    tuition
  } = props.general

  return (
    <Card className={c.cardContainer}>
      {/* TODO: titleContainer */}
      <div className={c.titleBlock}>
        <div className={c.titleContainer}>
          <div className={c.logoContainer}>
          </div>
          <Typography variant='h6'>
            {name_en}
          </Typography>
        </div>
      </div>
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
                      <Typography variant='caption'>学校のカーネギー分類：{classifications.carnegie_classification_ja}</Typography>
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
              {/*<Typography variant='body2'>州外生徒の平均学費： {tuition['out_of_state'][2019]['tuition']}</Typography>*/}
              {/*<Typography variant='body2'>州外生徒の平均学費： {JSON.stringify(tuition)}</Typography>*/}
              {/*<div className={c.testsBar__school}></div>*/}
              {/*<div className={c.testsBar__avg}></div>*/}
              {/*<Typography variant='body2'>州外生徒の平均学費</Typography>*/}
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
        d3.json(education.program_sizes, data =>
      </div>
    </Card>
  )
}
export default HomeSchoolCard