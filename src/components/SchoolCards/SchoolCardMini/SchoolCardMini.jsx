//@flow
import * as React from 'react'
import useStyles from './styles'
import {
  Card,
  Typography,
  Breadcrumbs,
  Tooltip,
  ButtonBase,
} from '@material-ui/core'
import { TurnedIn, TurnedInNot } from '@material-ui/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import { AuthContext } from '../../../AuthContext'

const SchoolCardMini = ({ school }: { school: Object }): React.Element<any> => {
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
            className={c.swiper}>
            {school.mini_img_srcs_jpeg.map((img, index) => {
              return (
                <SwiperSlide>
                  <picture>
                    <source
                      type="image/webp"
                      src={school.mini_img_srcs_webp[index]}
                      srcSet={school.mini_img_srcs_webp[index]}
                      className={c.img}
                    />
                    <source
                      type="image/jpeg"
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
              alt="画像がありません"
              src="../assets/image_not_found__size__300x100.jpeg"
              className={c.imgNotFound}
            />
          </div>
        )}
        <div className={c.textContainer}>
          <Typography variant="body2">{school.name_en}</Typography>
          <div className={c.infoContainer}>
            <Breadcrumbs aria-label={`link to ${school.name_en} page`}>
              <Typography variant="caption">{school.school_type}</Typography>
              <Typography variant="caption">{school.year_type}</Typography>
              <Typography variant="caption">{school.state_postcode}</Typography>
            </Breadcrumbs>
            {!!authContext.user.uid ? (
              school.isLiked ? (
                <TurnedIn disabled fontSize="small" />
              ) : (
                <TurnedInNot disabled fontSize="small" />
              )
            ) : (
              <Tooltip title="ログインして学校をお気に入り登録しよう！">
                <TurnedInNot disabled fontSize="small" />
              </Tooltip>
            )}
          </div>
        </div>
      </ButtonBase>
    </Card>
  )
}

export default SchoolCardMini
