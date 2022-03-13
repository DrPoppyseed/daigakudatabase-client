import * as React from 'react'
import useStyles from './styles'
import {
  Breadcrumbs,
  ButtonBase,
  Card,
  Tooltip,
  Typography,
} from '@mui/material'
import { TurnedIn, TurnedInNot } from '@mui/icons-material'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import { AuthContext } from '../../../contexts/AuthContext'

const SchoolCardMini = ({ school }) => {
  const c = useStyles()
  const authContext = React.useContext(AuthContext)

  return (
    <Card className={c.cardRoot}>
      <ButtonBase href={`${school.url}`} className={c.buttonBaseRoot}>
        {school.mini_img_srcs_jpeg.length > 0 ? (
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            spaceBetween={30}
            className={c.swiper}
          >
            {school.mini_img_srcs_jpeg.map((img, index) => {
              return (
                <SwiperSlide key={JSON.stringify(img)}>
                  <picture>
                    <source
                      type='image/webp'
                      src={school.mini_img_srcs_webp[index]}
                      srcSet={school.mini_img_srcs_webp[index]}
                      className={c.img}
                    />
                    <source
                      type='image/jpeg'
                      src={school.mini_img_srcs_jpeg[index]}
                      srcSet={school.mini_img_srcs_jpeg[index]}
                      className={c.img}
                    />
                    <img
                      src={school.mini_img_srcs_jpeg[index]}
                      alt={`${school.mini_img_alts[index]}`}
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
              alt='大学の画像がありません。フリー素材のhttps://www.freepik.com/vectors/school、pch.vector - www.freepik.comのフリー素材を使用してます。'
              src='../assets/image_not_found__size__300x100.jpeg'
              className={c.imgNotFound}
            />
          </div>
        )}
        <div className={c.textContainer}>
          <Typography variant='body2'>{school.name_en}</Typography>
          <div className={c.infoContainer}>
            <Breadcrumbs aria-label={`link to ${school.name_en} page`}>
              <Typography variant='caption'>{school.school_type}</Typography>
              <Typography variant='caption'>{school.year_type}</Typography>
              <Typography variant='caption'>{school.state_postcode}</Typography>
            </Breadcrumbs>
            {authContext.user.uid ? (
              school.isLiked ? (
                <TurnedIn disabled fontSize='small' />
              ) : (
                <TurnedInNot disabled fontSize='small' />
              )
            ) : (
              <Tooltip title='ログインして学校をお気に入り登録しよう！'>
                <TurnedInNot disabled fontSize='small' />
              </Tooltip>
            )}
          </div>
        </div>
      </ButtonBase>
    </Card>
  )
}

export default SchoolCardMini
