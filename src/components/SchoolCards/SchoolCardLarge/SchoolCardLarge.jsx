// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { TurnedInNot, TurnedIn } from '@material-ui/icons'
import { Typography, IconButton, Card, Tooltip } from '@material-ui/core'

import BasicStatsBreadcrumb from '../BasicStatsBreadcrumb/BasicStatsBreacrumb.jsx'
import TestStatsBreadcrumb from '../TestStatsBreadcrumb/TestStatsBreadcrumb.jsx'
import ChipGroup from '../ChipGroup/ChipGroup.jsx'
import useStyles from './styles'

import { likeSchoolById, unlikeSchoolById } from '../../../hooks/useAuth'
import { useMutation } from 'react-query'
import { AuthContext } from '../../../AuthContext'

type Props = {
  school: any,
}

const SchoolCardLarge = (props: Props): React.Element<any> => {
  const c = useStyles()
  const {
    url,
    uuid,
    card_img_src,
    card_img_alt,
    name_en,
    name_jp,
    summary,
    rating_score,
    ratings,
    year_type,
    school_type,
    state_jp,
    state_en,
    cost,
    sat,
    isLiked,
  } = props.school
  const [isCardLiked, setIsCardLiked] = React.useState(isLiked)

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
    !isCardLiked ? onClickLike.mutate(uuid) : onClickUnlike.mutate(uuid)
  }

  return (
    <Card className={c.cardContainer}>
      <div className={c.imgContainer}>
        <img className={c.img} src={card_img_src} alt={card_img_alt} />
      </div>
      <div className={c.cardTextContainer}>
        <Link
          to={`/schools/${url}`}
          style={{ textDecoration: 'none', color: 'black' }}>
          <div className={c.cardTextArea}>
            <Typography variant="h6">{name_en}</Typography>
            <BasicStatsBreadcrumb
              ratingScore={rating_score}
              ratings={ratings}
              yearType={year_type}
              schoolType={school_type}
              state={state_jp}
            />
            <Typography variant="caption" className={c.shortSummary}>
              {summary}
            </Typography>
          </div>
        </Link>
        <div className={c.bottomGroup}>
          <TestStatsBreadcrumb
            tuitionHigh={cost.in_state_tuition}
            tuitionLow={cost.out_of_state_tuition}
            // toeflRange={0}
            SATHigh={sat.high}
            SATLow={sat.low}
          />
          <div className={c.actionGroup}>
            {/** TODO: Add chips (uniqueflags) for each school */}
            {/* <ChipGroup chips={[{ label: '', link: '', chipId: '1' }]} /> */}
            <div style={{ flex: 'grow' }}></div>
            {!!authContext.user.uid ? (
              <IconButton onClick={handleLikeClick}>
                {isCardLiked ? (
                  <TurnedIn fontSize="small" />
                ) : (
                  <TurnedInNot fontSize="small" />
                )}
              </IconButton>
            ) : (
              <Tooltip title="ログインして学校をお気に入り登録しよう！">
                <IconButton>
                  <TurnedInNot fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default SchoolCardLarge
