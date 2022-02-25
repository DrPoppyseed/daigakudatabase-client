// @flow
import * as React from 'react'
import loadable from '@loadable/component'
import { Container } from '@material-ui/core'
// import { Index } from '@material-ui/lab'
// import { Link } from 'react-router-dom'
import useStyles from './styles'

import ProfileSummaryContainer from './ProfileSummaryContainer/ProfileSummaryContainer'
import LikedSchoolsContainer from './LikedSchoolsContainer/LikedSchoolsContainer'

import { Helmet } from 'react-helmet'

const EditProfileDialog = loadable(() =>
  import('./EditProfileDialog/EditProfileDialog.jsx')
)

const MyPage = (): React.Node => {
  const c = useStyles()

  const [inEditingMode, setInEditingMode] = React.useState(false)

  const descriptionElementRef = React.useRef(null)

  React.useEffect((): void => {
    if (inEditingMode) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [inEditingMode])

  const handleDialogClose = (): void => {
    setInEditingMode(false)
  }

  /** TODO: enable rendering after school is unliked*/

  return (
    <div className={c.root}>
      <Helmet>
        <title>マイページ</title>
        <meta
          name="description"
          content="プロフィールを編集したり、お気に入りした大学をチェックアウトしよう。"
        />
      </Helmet>
      <Container className={c.mypageContainer}>
        {/** first profile section */}
        <ProfileSummaryContainer setInEditingMode={setInEditingMode} />
        {/** liked universities section */}
        <LikedSchoolsContainer />
        <EditProfileDialog
          open={inEditingMode}
          handleClose={handleDialogClose}
        />
      </Container>
    </div>
  )
}

export default MyPage
