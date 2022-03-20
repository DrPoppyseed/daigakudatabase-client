import { IconButton, Tooltip } from '@mui/material'
import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from '@mui/icons-material'
import React, { useState, useContext, FC, useEffect } from 'react'
import { useMutation } from 'react-query'
import { AuthContext } from '../../contexts/AuthContext'
import { likeSchoolById, unlikeSchoolById } from '../../hooks/useAuth'

export interface CardLikedIconProps {
  unitid: string
  isLiked: boolean
}

const CardLikedIcon: FC<CardLikedIconProps> = ({ unitid, isLiked }) => {
  const [isCardLiked, setIsCardLiked] = useState(isLiked)

  const authContext = useContext(AuthContext)

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
    setIsCardLiked(prevIsCardLiked => !prevIsCardLiked)
  }

  useEffect(() => {
    if (isCardLiked) onClickLike.mutate(unitid)
    else onClickUnlike.mutate(unitid)
  }, [unitid, isCardLiked, onClickLike, onClickUnlike])

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
