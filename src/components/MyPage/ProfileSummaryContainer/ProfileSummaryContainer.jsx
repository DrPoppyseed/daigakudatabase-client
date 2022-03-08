import * as React from 'react'
import clsx from 'clsx'
import { IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Skeleton from '@mui/material/Skeleton'

import useStyles from './styles'

const ProfileSummaryContainer = props => {
  const c = useStyles()
  const [isPageLoading] = React.useState(true)
  const [userProfile] = React.useState({
    userId: '',
    userFirebaseId: '',
    profileStatus: 0,
    firstName: '',
    lastName: '',
    imageUrl: '',
    imageThumbUrl: '',
    profileText: '',
    belongsTo: {},
  })
  const [userBelongsTo] = React.useState({
    _id: '',
    userId: '',
    name: '',
    email: '',
    emailVerified: false,
  })

  return (
    <Paper className={clsx(c.profileSummaryContainer, c.profileItemContainer)}>
      <div className={c.profileImageArea}>
        {/** user image section */}
        {!isPageLoading ? (
          <image
            className={c.profileImageContainer}
            src={userProfile.imageUrl}
            alt={'user profile image'}
            height={140}
            width={140}
          />
        ) : (
          <Skeleton variant='circular' height={140} width={140} />
        )}
      </div>
      <div className={c.profileTextArea}>
        {/** user profile information */}
        <div className={clsx(c.profileTextItem, c.profileUserNameContainer)}>
          <Typography variant='caption'>ユーザー名</Typography>
          <Typography variant='h6' className={c.profileUserName}>
            {!isPageLoading ? (
              `${userProfile.lastName} ${userProfile.firstName}`
            ) : (
              <Skeleton variant='rectangular' width={200} />
            )}
          </Typography>
        </div>
        <div className={clsx(c.profileTextItem, c.profileUserSchoolContainer)}>
          <Typography variant='caption'>所属</Typography>
          <Typography variant='h6' className={c.profileUserSchool}>
            {isPageLoading ? (
              <Skeleton variant='rectangular' width={200} />
            ) : (
              userBelongsTo.name
              // <></>
            )}
          </Typography>
        </div>
        <div className={clsx(c.profileUserProfileTextContainer)}>
          <Typography variant='caption'>プロフィール</Typography>
          <Typography variant='body1' className={c.profileUserProfileText}>
            {!isPageLoading ? (
              <React.Fragment>{`${userProfile.profileText}`}</React.Fragment>
            ) : (
              <Skeleton variant='rectangular' width={400} />
            )}
          </Typography>
        </div>
      </div>
      <IconButton
        className={c.editIconContainer}
        onClick={() => props.setInEditingMode(prevMode => !prevMode)}
        size='large'
      >
        <EditIcon className={c.editIcon} />
      </IconButton>
    </Paper>
  )
}

export default ProfileSummaryContainer
