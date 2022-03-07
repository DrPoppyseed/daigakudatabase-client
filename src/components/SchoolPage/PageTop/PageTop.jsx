import * as React from 'react'
import { Button, Paper, Tab, Tabs, Tooltip, Typography } from '@mui/material'
import { OpenInNew as OpenInNewIcon, TurnedIn, TurnedInNot } from '@mui/icons-material'
import { useMutation } from 'react-query'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import { AuthContext } from '../../../AuthContext'
import { likeSchoolById, unlikeSchoolById } from '../../../hooks/useAuth'
import useStyles from './styles'
import BasicStatsBreadcrumb from '../../SchoolCards/BasicStatsBreadcrumb/BasicStatsBreacrumb.jsx'

const PageTop = ({
  tabIndex,
  handleTabChange,
  school,
  isLiked = false,
}) => {
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
          {school.page_img_srcs_jpeg.length > 0 ? (
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              spaceBetween={30}
              className={c.swiper}>
              {school.page_img_srcs_jpeg.map((img, index) => {
                return (
                  <SwiperSlide>
                    <picture>
                      <source
                        type="image/webp"
                        src={school.page_img_srcs_webp[index]}
                        srcSet={school.page_img_srcs_webp[index]}
                        className={c.img}
                      />
                      <source
                        type="image/jpeg"
                        src={school.page_img_srcs_jpeg[index]}
                        srcSet={school.page_img_srcs_jpeg[index]}
                        className={c.img}
                      />
                      <img
                        src={school.page_img_srcs_jpeg[index]}
                        alt={`${school.page_img_alts[index]}`}
                        className={c.img}
                      />
                    </picture>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          ) : (
            <div className={c.imgNotFoundContainer}>
              <img
                alt="大学の画像がありません。フリー素材のhttps://www.freepik.com/vectors/school、pch.vector - www.freepik.comのフリー素材を使用してます。"
                src="../assets/image_not_found__size__800x400.jpeg"
                className={c.imgNotFound}
              />
            </div>
          )}
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
