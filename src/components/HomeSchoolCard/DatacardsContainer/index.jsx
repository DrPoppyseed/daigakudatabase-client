import * as React from 'react'
import useStyles from './styles.js'
import { Typography } from '@material-ui/core'

const DatacardsContainer = (props) => {
  const c = useStyles()
  const { campus, education, classifications, tuition, admissions } = props

  return (
    <div className={c.datacardsBlock}>
      <div className={c.datacardContainer}>
        <div>
          <Typography variant="button">学校概要</Typography>
        </div>
        <div className={c.datacardBodyContainer}>
          <div className={c.datacardSummaryItem}>
            <Typography variant="caption">
              設置形態：{campus.control_ja} ・ 学期制：
              {education.calendar_system_ja}
            </Typography>
          </div>
          <div className={c.datacardSummaryItem}>
            <Typography variant="caption">
              {campus.state_ja}州 ({campus.region_ja}）
            </Typography>
          </div>
          {classifications !== undefined ? (
            <React.Fragment>
              <div className={c.datacardSummaryItem}>
                <Typography variant="caption">
                  学校の分類規模：{classifications.carnegie_size_category_ja}
                </Typography>
              </div>
              <div className={c.datacardSummaryItem}>
                <Typography variant="caption">
                  学校のカーネギー分類：
                  {classifications.carnegie_classification_ja}
                </Typography>
              </div>
            </React.Fragment>
          ) : (
            <div>ー</div>
          )}
          {admissions.population.admissions_rate !== null &&
          admissions.population.admissions_rate !== '-' ? (
            <Typography variant="caption">
              合格率：{admissions.population.admissions_rate}%
            </Typography>
          ) : (
            <Typography variant="caption">合格率：ー</Typography>
          )}
        </div>
      </div>
      <div className={c.datacardContainer}>
        <div className={c.datacardTitleContainer}>
          <Typography variant="button">テストと学費</Typography>
        </div>
        <div className={c.datacardBodyContainer}>
          {tuition !== null ? (
            <Typography variant="caption">
              州外生徒の平均学費： $
              {new Intl.NumberFormat().format(
                tuition['out_of_state'][2019]['tuition']
              )}
            </Typography>
          ) : (
            <Typography variant="caption">州外生徒の平均学費：ー</Typography>
          )}
          {admissions.act.comp_25th_percentile === null &&
          admissions.sat.eng_25th_percentile === null ? (
            <React.Fragment>
              <Typography variant="caption">
                入学者のACT点数の範囲：ー
              </Typography>
              <Typography variant="caption">
                入学者のSAT点数の範囲：ー
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography variant="caption">
                入学者のACT点数の範囲： {admissions.act.comp_25th_percentile}点
                ~ {admissions.act.comp_75th_percentile}点
              </Typography>
              <Typography variant="caption">
                入学者のSAT点数の範囲： {admissions.sat.total_25th_percentile}点
                ~{admissions.sat.total_75th_percentile}点
              </Typography>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  )
}

export default DatacardsContainer
