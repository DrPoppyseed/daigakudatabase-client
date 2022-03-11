import * as React from 'react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, IconButton, Tooltip, Typography } from '@mui/material'
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material'
import useStyles from './HomeSchoolCardStyles'
import DatacardsContainer from './DatacardsContainer'

import { likeSchoolById, unlikeSchoolById } from '../../hooks/useAuth'
import { useMutation } from 'react-query'
import { AuthContext } from '../../AuthContext'

export interface HomeSchoolCardProps {
  general: any
}

const HomeSchoolCard: FC<HomeSchoolCardProps> = ({
  general: {
    name_en,
    education,
    campus,
    classifications,
    tuition,
    admissions,
    students,
    ipeds_unitid,
    isLiked,
  },
}) => {
  const c = useStyles()

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
    console.log(ipeds_unitid)
    !isCardLiked
      ? onClickLike.mutate(ipeds_unitid)
      : onClickUnlike.mutate(ipeds_unitid)
  }

  return (
    <Card className={c.cardContainer}>
      <div className={c.titleBlock}>
        <div className={c.titleContainer}>
          {authContext.user.uid ? (
            isCardLiked ? (
              <IconButton onClick={() => handleLikeClick()} size='large'>
                <StarIcon style={{ color: '#ffa726' }} />
              </IconButton>
            ) : (
              <IconButton onClick={() => handleLikeClick()} size='large'>
                <StarBorderIcon />
              </IconButton>
            )
          ) : (
            <IconButton size='large'>
              <Tooltip title='ログインして学校をお気に入り登録しよう！'>
                <StarBorderIcon />
              </Tooltip>
            </IconButton>
          )}
          <div className={c.logoContainer} />
          <Typography variant='h6'>{name_en}</Typography>
        </div>
        <Button
          variant='contained'
          color='primary'
          disableElevation
          className={c.buttonContainer}
        >
          <Link to='#' className={c.buttonLink}>
            もっと詳しく
          </Link>
        </Button>
      </div>
      <div className={c.bodyBlock}>
        <DatacardsContainer
          campus={campus}
          education={education}
          classifications={classifications}
          tuition={tuition}
          admissions={admissions}
        />
        {/*<D3GraphsContainer*/}
        {/*  admissionsData={admissions}*/}
        {/*  tuitionData={tuition}*/}
        {/*  educationData={education}*/}
        {/*  studentsData={students}*/}
        {/*  ipeds_unitid={ipeds_unitid}*/}
        {/*/>*/}
      </div>
    </Card>
  )
}
export default HomeSchoolCard
