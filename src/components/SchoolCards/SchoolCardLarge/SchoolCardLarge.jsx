// // @flow
// import * as React from 'react'
// import { Link } from 'react-router-dom'
// import { Typography, Card, IconButton, Tooltip } from '@material-ui/core'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import {
//   StarBorder as StarBorderIcon,
//   Star as StarIcon,
// } from '@material-ui/icons'
// import 'swiper/swiper.min.css'
// import 'swiper/components/pagination/pagination.min.css'
// import 'swiper/components/navigation/navigation.min.css'
// import SwiperCore, { Pagination, Navigation } from 'swiper/core'
//
// import BasicStatsBreadcrumb from '../BasicStatsBreadcrumb/BasicStatsBreacrumb.jsx'
// import TestStatsBreadcrumb from '../TestStatsBreadcrumb/TestStatsBreadcrumb.jsx'
// import useStyles from './styles'
//
// import { likeSchoolById, unlikeSchoolById } from '../../../hooks/useAuth'
// import { useMutation } from 'react-query'
// import { AuthContext } from '../../../AuthContext'
//
// type Props = {
//   school: any,
// }
//
// SwiperCore.use([Pagination, Navigation])
//
// const SchoolCardLarge = (props: Props): React.Element<any> => {
//   const c = useStyles()
//   const {
//     url,
//     uuid,
//     card_img_srcs_jpeg,
//     card_img_srcs_webp,
//     card_img_alts,
//     name_en,
//     name_jp,
//     summary,
//     rating_score,
//     ratings,
//     year_type,
//     school_type,
//     state_jp,
//     cost,
//     sat,
//     isLiked,
//   } = props.school
//   const [isCardLiked, setIsCardLiked] = React.useState(isLiked)
//
//   const onClickLike = useMutation(likeSchoolById, {
//     onSuccess: () => {
//       setIsCardLiked(true)
//       console.log('success!')
//     },
//   })
//   const onClickUnlike = useMutation(unlikeSchoolById, {
//     onSuccess: () => {
//       setIsCardLiked(false)
//       console.log('unlike success!')
//     },
//   })
//   const authContext = React.useContext(AuthContext)
//   const handleLikeClick = () => {
//     setIsCardLiked(!isCardLiked)
//     !isCardLiked ? onClickLike.mutate(uuid) : onClickUnlike.mutate(uuid)
//   }
//
//   return (
//     <Card className={c.cardContainer}>
//       <div className={c.swiperContainer}>
//         <div className={c.tagContainer}>
//           <IconButton className={c.tag} onClick={() => handleLikeClick()}>
//             {!!authContext.user.uid ? (
//               isCardLiked ? (
//                 <StarIcon style={{ color: '#ffa726' }} />
//               ) : (
//                 <StarBorderIcon />
//               )
//             ) : (
//               <Tooltip title="ログインして学校をお気に入り登録しよう！">
//                 <StarBorderIcon />
//               </Tooltip>
//             )}
//           </IconButton>
//         </div>
//         {card_img_srcs_jpeg.length > 0 ? (
//           <Swiper
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             navigation={true}
//             spaceBetween={30}
//             className={c.swiper}>
//             {card_img_srcs_jpeg.map((img, index) => {
//               return (
//                 <SwiperSlide key={index}>
//                   <picture>
//                     <source
//                       type="image/webp"
//                       src={card_img_srcs_webp[index]}
//                       srcSet={card_img_srcs_webp[index]}
//                       className={c.img}
//                     />
//                     <source
//                       type="image/jpeg"
//                       src={card_img_srcs_jpeg[index]}
//                       srcSet={card_img_srcs_jpeg[index]}
//                       className={c.img}
//                     />
//                     <img
//                       src={card_img_srcs_jpeg[index]}
//                       alt={`${card_img_alts[index]}`}
//                       className={c.img}
//                     />
//                   </picture>
//                 </SwiperSlide>
//               )
//             })}
//           </Swiper>
//         ) : (
//           <div className={c.imgContainer}>
//             <img
//               alt="大学の画像がありません。フリー素材のhttps://www.freepik.com/vectors/school、pch.vector - www.freepik.comのフリー素材を使用してます。"
//               src="./assets/image_not_found__size__300x300.jpeg"
//               className={c.imgNotFound}
//             />
//           </div>
//         )}
//       </div>
//       <Link to={`/schools/${url}`} className={c.linkContainer}>
//         <div className={c.cardTitle}>
//           <Typography variant="h6">{name_jp}</Typography>
//           <Typography
//             style={{ overflow: 'auto', whiteSpace: 'nowrap' }}></Typography>
//           <Typography variant="outline">{name_en}</Typography>
//         </div>
//         <div className={c.cardText} style={{ flexGrow: 1 }}>
//           <Typography variant="caption" className={c.shortSummary}>
//             {summary.length > 80 ? (
//               summary.slice(0, 80) + ' ...続きを見る'
//             ) : (
//               <Typography variant="caption">
//                 この大学に関するサマリーはまだありません。質問等は
//                 peaske16180@gmail.com まで連絡をどうぞ。
//               </Typography>
//             )}
//           </Typography>
//         </div>
//         <div className={c.stats}>
//           <BasicStatsBreadcrumb
//             ratingScore={rating_score}
//             ratings={ratings}
//             yearType={year_type}
//             schoolType={school_type}
//             state={state_jp}
//           />
//           <TestStatsBreadcrumb
//             tuitionHigh={cost.in_state_tuition}
//             tuitionLow={cost.out_of_state_tuition}
//             tuitionAvg={cost.academic_year_avg}
//             SATHigh={sat.high}
//             SATLow={sat.low}
//           />
//         </div>
//       </Link>
//     </Card>
//   )
// }
//
// export default SchoolCardLarge

import * as React from 'react'

const SchoolCardLarge = () => {
  return <div>schoolCarLarge Component</div>
}

export default SchoolCardLarge