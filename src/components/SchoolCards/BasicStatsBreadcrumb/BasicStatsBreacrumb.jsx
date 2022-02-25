// @flow
import * as React from 'react'

import { Breadcrumbs, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import useStyles from './styles'

type Props = {
  ratingScore: number | string,
  ratings: number | string,
  yearType: string,
  schoolType: string,
  state: string,
}

const BasicStatsBreadcrumb = (props: Props): React.Node => {
  const c = useStyles()

  return (
    <Breadcrumbs aria-label="breadcrumb" className={c.breadcrumbContainer}>
      <div className={c.ratingContainer}>
        <Rating
          name="foris-rating"
          precision={0.1}
          value={props.ratingScore}
          size="small"
          readOnly
        />
        <Typography variant="caption" className={c.ratingText}>
          {`${props.ratingScore} (${props.ratings})`}
        </Typography>
      </div>
      <Typography variant="caption">{props.yearType}</Typography>
      <Typography variant="caption">{props.schoolType}</Typography>
      <Typography variant="caption">{props.state}</Typography>
    </Breadcrumbs>
  )
}

export default BasicStatsBreadcrumb
