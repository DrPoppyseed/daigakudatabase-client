// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'
import { Card, Typography, IconButton } from '@material-ui/core'

import TurnedIn from '@material-ui/icons/TurnedIn'
import useStyles from './styles'
import { likeSchoolById, unlikeSchoolById } from '../../../hooks/useAuth'
import { useMutation } from 'react-query'

import BasicStatsBreacrumb from '../BasicStatsBreadcrumb/BasicStatsBreacrumb.jsx'

type Props = {
  name: string,
  url: string,
  schoolId: string,
  ratingScore: number,
  ratings: number,
  yearType: string,
  schoolType: string,
  state: string,
}

const SchoolCardSmall = (props: Props): React.Node => {
  const c = useStyles()

  const onClickUnlike = useMutation(unlikeSchoolById, {
    onSuccess: () => {
      console.log('unlike success!')
    },
  })

  const {
    name,
    schoolId,
    url,
    ratingScore,
    ratings,
    yearType,
    schoolType,
    state,
  } = props

  return (
    <Card variant="outlined" className={c.root}>
      <Link to={`/schools/${url}`} className={c.schoolLinkContainer}>
        <Typography variant="h6" className={c.schoolName}>
          {name}
        </Typography>
        <BasicStatsBreacrumb
          ratingScore={ratingScore}
          ratings={ratings}
          yearType={yearType}
          schoolType={
            schoolType === 'コミュニティカレッジ' ? 'コミカレ' : schoolType
          }
          state={state}
        />
      </Link>
      <IconButton
        className={c.iconButton}
        onClick={() => onClickUnlike.mutate(schoolId)}>
        <TurnedIn className={c.icon} />
      </IconButton>
    </Card>
  )
}

export default SchoolCardSmall
