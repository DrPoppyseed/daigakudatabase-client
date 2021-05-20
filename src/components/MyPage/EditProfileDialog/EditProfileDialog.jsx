// @flow
import * as React from 'react'
import clsx from 'clsx'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Button,
} from '@material-ui/core'
import useStyles from './styles'

type Props = {
  open: boolean,
  handleClose: any,
}

const EditProfileDialog = (props: Props): React.Node => {
  const c = useStyles()
  const [isPageLoading, setIsPageLoading] = React.useState(true)
  const [userSchool, setUserSchool] = React.useState('')
  const [userProfileText, setUserProfileText] = React.useState('')
  const [userName, setUserName] = React.useState({
    firstName: '',
    lastName: '',
  })

  const userProfile = {
    belongsTo: { name: 'test' },
    firstName: 'firstName',
    lastName: 'lastName',
    profileText: 'this is my dummy profileText',
    imageUrl: '',
  }

  React.useEffect(() => {
    if (!isPageLoading) {
      setUserSchool(userProfile.belongsTo.name)
      setUserProfileText(userProfile.profileText)
      setUserName({
        firstName: userProfile.firstName,
        lastName: userProfile.lastName,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPageLoading])

  const handleNameChange = (event): void => {
    setUserName({ [event.target.name]: event.target.value })
  }

  const handleSchoolChange = (event): void => {
    setUserSchool(event.target.value)
  }

  const handleCancelClick = (): void => {
    props.handleClose()
    setUserName({
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
    })
    setUserSchool(userProfile.belongsTo.name)
  }

  const handleProfileTextChange = (event): void => {
    setUserProfileText(event.target.value)
  }

  return (
    <Dialog
      scroll="paper"
      className={c.root}
      open={props.open}
      onClose={props.handleClose}>
      <DialogTitle className={c.dialogTitle}>
        プロフィールを編集する
      </DialogTitle>
      <DialogContent dividers className={c.dialogContent}>
        <form>
          <div className={c.topContentContainer}>
            <Typography variant="subtitle2" className={c.topContentTitle}>
              プロフィールトップ
            </Typography>
            <div className={c.topContentArea}>
              <div className={c.editProifleImageArea}>
                {/** TODO: cropperjs, image manipulation bit. */}
                {/* <img
                  className={c.editProfileImage}
                  src={props.profileImgUrl}
                  alt={props.profileImgAlt}
                /> */}
                <img
                  src={userProfile.imageUrl}
                  className={c.editProfileImage}
                  height={140}
                  width={140}
                  alt="user profile"
                />
              </div>
              <div className={c.topTextArea}>
                <div className={clsx(c.fieldContainer, c.nameFieldContainer)}>
                  {/** TODO: edit first name last name */}
                  <TextField
                    required
                    id="edit-lastName"
                    name="lastName"
                    label="姓"
                    className={clsx(c.nameField, c.lastNameField)}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={userName.lastName}
                    onChange={handleNameChange}
                  />
                  <TextField
                    required
                    id="edit-firstName"
                    name="firstName"
                    label="名字"
                    className={c.nameField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={userName.firstName}
                    onChange={handleNameChange}
                  />
                </div>
                <div className={clsx(c.fieldContainer, c.schoolFieldContainer)}>
                  {/* <Typography variant="caption">
                    所属先（所属する学校・企業・団体）
                  </Typography> */}
                  <TextField
                    required
                    className={c.schoolField}
                    id="edit-school"
                    label="大学と学部"
                    value={userSchool}
                    onChange={handleSchoolChange}
                  />
                  {/** TODO: 所属先の認証の方法を見つける */}
                  {/* <Button>所属先を認証する</Button> */}
                </div>
              </div>
            </div>
          </div>
          <div className={c.messageContentContainer}>
            <Typography variant="subtitle2" className={c.messageContentTitle}>
              プロフィールメッセージ
            </Typography>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              id="edit-profileText"
              name="profileText"
              className={c.profileText}
              onChange={handleProfileTextChange}
              value={userProfileText}
            />
            {/** TODO: プロフィールの公開設定 with checkbox */}
          </div>
        </form>
      </DialogContent>
      <DialogActions className={c.dialogActions}>
        <Button className={c.cancelButton} onClick={handleCancelClick}>
          キャンセル
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={c.saveButton}
          disableElevation>
          変更を保存する
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditProfileDialog
