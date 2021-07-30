// @flow
import * as React from 'react'
import {Link} from 'react-router-dom'
import {Typography, Card, Button, IconButton, List, ListItem, Tooltip, Tabs, Tab} from '@material-ui/core'
import {
  StarBorder as StarBorderIcon,
  Star as StarIcon,
} from '@material-ui/icons'
import useStyles from './styles'
import D3GraphsContainer from './D3GraphsContainer'

import {likeSchoolById, unlikeSchoolById} from '../../hooks/useAuth'
import {useMutation} from 'react-query'
import {AuthContext} from '../../AuthContext'

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
    students,
    ipeds_unitid,
    isLiked
  } = props.general

  const [isCardLiked, setIsCardLiked] = React.useState(isLiked)

  console.log(ipeds_unitid, tuition)

  const onClickLike = useMutation(likeSchoolById, {
    onSuccess: () => {
      setIsCardLiked(true)
      console.log('success!')
    },
  })
  const onClickUnlike = useMutation(unlikeSchoolById, {
    onSuccess: () => {
      setIsCardLiked(false)
      console.log('unlike success!')
    },
  })
  const authContext = React.useContext(AuthContext)
  const handleLikeClick = () => {
    setIsCardLiked(!isCardLiked)
    // TODO: handle liking by unitid or ffname (=> backend solution required)
    // !isCardLiked ? onClickLike.mutate(uuid) : onClickUnlike.mutate(uuid)
  }


  return (
    <Card className={c.cardContainer}>
      <div className={c.titleBlock}>
        <div className={c.titleContainer}>
          <IconButton onClick={() => handleLikeClick()}>
            {!!authContext.user.uid ? (
              isCardLiked ? (
                <StarIcon style={{color: '#ffa726'}}/>
              ) : (
                <StarBorderIcon/>
              )
            ) : (
              <Tooltip title="ログインして学校をお気に入り登録しよう！">
                <StarBorderIcon/>
              </Tooltip>
            )}
          </IconButton>
          <div className={c.logoContainer}>
          </div>
          <Typography variant='h6'>
            {name_en}
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={c.button}>
          <Link
            to="#"
            className={c.buttonLink}>
            もっと詳しく
          </Link>
        </Button>
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
                  tuition !== undefined && tuition['out_of_state'][2019]['tuition'] !== '-' ? (
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
                          入学者のACT点数の範囲： {admissions.act.comp_25th_percentile}点 ~ {admissions.act.comp_75th_percentile}点
                        </Typography>
                        <Typography variant='caption'>
                          入学者のSAT点数の範囲： {admissions.sat.eng_25th_percentile + admissions.sat.math_25th_percentile}点 ~
                          {admissions.sat.eng_75th_percentile + admissions.sat.math_75th_percentile}点
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
        <div className={c.graphsBlock}>
          <D3GraphsContainer
            admissionsData={admissions}
            tuitionData={tuition}
            educationData={education}
            studentsData={students}
            ipeds_unitid={ipeds_unitid}
          />
        </div>
      </div>
    </Card>
  )
}
export default HomeSchoolCard