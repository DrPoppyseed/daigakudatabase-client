//@flow
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react'
import {
  Paper,
  Button,
  Typography,
  Tabs,
  Tab,
  Tooltip,
} from '@material-ui/core'
import {
  OpenInNew as OpenInNewIcon,
  TurnedIn,
  TurnedInNot,
} from '@material-ui/icons'
import { useMutation } from 'react-query'

import { AuthContext } from '../../../AuthContext'
import { likeSchoolById, unlikeSchoolById } from '../../../hooks/useAuth'
import useStyles from './styles'
import BasicStatsBreadcrumb from '../../SchoolCards/BasicStatsBreadcrumb/BasicStatsBreacrumb.jsx'

const PageTop = ({
  tabIndex,
  handleTabChange,
  school,
  isLiked = false,
}: {
  tabIndex: number,
  handleTabChange: Function,
  school: Object,
  isLiked: any,
}): React.Element<any> => {
  const c = useStyles()
  const authContext = React.useContext(AuthContext)
  const [likedState, setLikedState] = React.useState(isLiked)

  const onClickLike = useMutation(likeSchoolById, {
    onSuccess: () => {
      setLikedState(true)
      console.log('success!')
    },
  })
  const onClickUnlike = useMutation(unlikeSchoolById, {
    onSuccess: () => {
      setLikedState(false)
      console.log('unlike success!')
    },
  })
  const handleLikeClick = () => {
    setLikedState(!likedState)
    !likedState
      ? onClickLike.mutate(school.uuid)
      : onClickUnlike.mutate(school.uuid)
  }

  return (
    <Paper className={c.summaryContainer}>
      <div className={c.primaryImageContainer}>
        <div className={c.buttonGroup}>
          <a
            href={`//${school.school_homepage_url}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}>
            <Button
              size="small"
              variant="contained"
              startIcon={<OpenInNewIcon />}
              disableElevation
              color="primary">
              公式サイトにアクセス
            </Button>
          </a>
          {!!authContext.user.uid ? (
            <Button
              size="small"
              className={c.likeButton}
              variant="contained"
              startIcon={likedState ? <TurnedIn /> : <TurnedInNot />}
              onClick={() => handleLikeClick()}
              disableElevation
              style={{ backgroundColor: 'green', color: 'white' }}>
              {likedState ? 'お気に入り登録済み' : 'お気に入り登録する'}
            </Button>
          ) : (
            <Tooltip title="ログインして学校をお気に入り登録しよう！">
              <Button
                size="small"
                className={c.likeButton}
                variant="contained"
                startIcon={<TurnedInNot />}
                disableElevation
                style={{ backgroundColor: 'green', color: 'white' }}>
                お気に入り登録する
              </Button>
            </Tooltip>
          )}
        </div>
        <div className={c.imgContainer}>
          <img
            src={`${school.page_img_src}`}
            thumb={`${school.page_img_src}`}
            alt={`${school.card_img_alt}`}
            className={c.primaryImage}
          />
        </div>
      </div>
      <div className={c.summaryTextContainer}>
        <div className={c.summaryTitleArea}>
          <div>
            <BasicStatsBreadcrumb
              className={c.basicStatsBreadcrumb}
              ratingScore={0}
              ratings={0}
              yearType={`${school.year_type}`}
              schoolType={`${school.school_type}`}
              state={`${school.state_jp}`}
            />
            <Typography variant="h5" className={c.schoolNameJap}>
              {school.name_jp}
            </Typography>
            <Typography variant="caption" className={c.schoolNameEn}>
              {school.name_en.toUpperCase()}
            </Typography>
          </div>
        </div>
      </div>
      <div className={c.summaryTabsContainer}>
        <Tabs
          className={c.summaryTabs}
          value={tabIndex}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleTabChange}>
          <Tab label="基本情報" />
          <Tab label="専攻情報" />
          <Tab label="応募情報" disabled />
        </Tabs>
      </div>
    </Paper>
  )
}

export default PageTop
