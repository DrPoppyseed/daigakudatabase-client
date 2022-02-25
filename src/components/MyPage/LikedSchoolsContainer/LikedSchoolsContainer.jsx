// @flow
import * as React from 'react'
import clsx from 'clsx'
import { Typography, Paper } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import useStyles from './styles'
import SchoolCardSmall from '../../SchoolCards/SchoolCardSmall/SchoolCardSmall.jsx'

const LikedSchoolsContainer = (): React.Element<any> => {
  const c = useStyles()
  const [likedSchools] = React.useState([])
  const [isPageLoading] = React.useState(true)

  const renderLikedSchools = likedSchools.map((school): React.Node => {
    return (
      <SchoolCardSmall
        key={school.school_id}
        schoolId={school.school_id}
        url={school.url}
        name={school.name}
        ratingScore={school.ratingScore}
        ratings={school.ratings}
        yearType={school.yearType}
        schoolType={school.schoolType}
        state={school.state}
      />
    )
  })

  return (
    <Paper className={clsx(c.likedSchoolsContainer, c.profileItemContainer)}>
      <Typography variant="h6" className={c.likedSchoolsAreaTitle}>
        お気に入り登録した大学
      </Typography>
      <div className={c.likedSchoolsGridArea}>
        {!isPageLoading ? (
          renderLikedSchools
        ) : (
          <React.Fragment>
            <Skeleton variant="rect" width={450} height={150} />
            <Skeleton variant="rect" width={450} height={150} />
            <Skeleton variant="rect" width={450} height={150} />
            <Skeleton variant="rect" width={450} height={150} />
          </React.Fragment>
        )}
      </div>
    </Paper>
  )
}

export default LikedSchoolsContainer
