import { IconButton, Tooltip } from '@mui/material'
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material'
import React, { FC } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useMutation } from 'react-query'
import { likeSchoolById, unlikeSchoolById } from '../../hooks/useAuth'

export interface CardLikedIconProps {
  unitid: string
  isLiked: boolean
}

const CardLikedIcon: FC<CardLikedIconProps> = ({ unitid, isLiked }) => {
  const [isCardLiked, setIsCardLiked] = React.useState(isLiked)

  const authContext = React.useContext(AuthContext)

  const onClickLike = useMutation(likeSchoolById, {
    onSuccess: () => {
      setIsCardLiked(true)
    },
  })
  const onClickUnlike = useMutation(unlikeSchoolById, {
    onSuccess: () => {
      setIsCardLiked(false)
    },
  })

  const handleLikeClick = () => {
    setIsCardLiked(!isCardLiked)
    !isCardLiked ? onClickLike.mutate(unitid) : onClickUnlike.mutate(unitid)
  }

  return authContext.user.uid ? (
    isCardLiked ? (
      <IconButton onClick={handleLikeClick}>
        <StarIcon style={{ color: '#ffa726' }} />
      </IconButton>
    ) : (
      <IconButton onClick={handleLikeClick}>
        <StarBorderIcon />
      </IconButton>
    )
  ) : (
    <IconButton>
      <Tooltip title='ログインして学校をお気に入り登録しよう！'>
        <StarBorderIcon />
      </Tooltip>
    </IconButton>
  )
}

export default CardLikedIcon
