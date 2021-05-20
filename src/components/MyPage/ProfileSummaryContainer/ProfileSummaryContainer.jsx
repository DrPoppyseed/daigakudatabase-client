// @flow
import * as React from 'react'
import clsx from 'clsx'
import { Paper, Typography, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import Skeleton from '@material-ui/lab/Skeleton'

import useStyles from './styles'

type Props = {
  setInEditingMode: any,
}

const ProfileSummaryContainer = (props: Props): React.Element<any> => {
  const c = useStyles()
  const [isPageLoading, setIsPageLoading] = React.useState(true)
  const [userProfile, setUserProfile] = React.useState({
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
  const [userBelongsTo, setUserBelongsTo] = React.useState({
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
          <Skeleton variant="circle" height={140} width={140} />
        )}
      </div>
      <div className={c.profileTextArea}>
        {/** user profile information */}
        <div className={clsx(c.profileTextItem, c.profileUserNameContainer)}>
          <Typography variant="caption">ユーザー名</Typography>
          <Typography variant="h6" className={c.profileUserName}>
            {!isPageLoading ? (
              `${userProfile.lastName} ${userProfile.firstName}`
            ) : (
              <Skeleton variant="rect" width={200} />
            )}
          </Typography>
        </div>
        <div className={clsx(c.profileTextItem, c.profileUserSchoolContainer)}>
          <Typography variant="caption">所属</Typography>
          <Typography variant="h6" className={c.profileUserSchool}>
            {isPageLoading ? (
              <Skeleton variant="rect" width={200} />
            ) : (
              userBelongsTo.name
              // <></>
            )}
          </Typography>
        </div>
        <div className={clsx(c.profileUserProfileTextContainer)}>
          <Typography variant="caption">プロフィール</Typography>
          <Typography variant="body1" className={c.profileUserProfileText}>
            {!isPageLoading ? (
              <React.Fragment>{`${userProfile.profileText}`}</React.Fragment>
            ) : (
              <Skeleton variant="rect" width={400} />
            )}
          </Typography>
        </div>
      </div>
      <IconButton
        className={c.editIconContainer}
        onClick={() => props.setInEditingMode(prevMode => !prevMode)}>
        <EditIcon className={c.editIcon} />
      </IconButton>
    </Paper>
  )
}

export default ProfileSummaryContainer
