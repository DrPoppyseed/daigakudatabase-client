// @flow
import * as React from 'react'
import useStyles from './styles'
import { Typography, Card, ButtonBase } from '@material-ui/core'

import SchoolCardMini from '../../SchoolCards/SchoolCardMini/SchoolCardMini'
import { useGetSchools } from '../../../hooks/useSchools'

const RecommendedSchools = ({
  currentSchoolUuid,
}: {
  currentSchoolUuid: string,
}): React.Element<any> => {
  const c = useStyles()
  const { status, data } = useGetSchools(1)

  React.useEffect(() => {
    console.log('from RecommendedSchools')
    console.log(status, data)
  })

  return (
    <div>
      <Card className={c.recommendationTitle}>
        <Typography variant="body1">他の大学も見る</Typography>
      </Card>
      <div className={c.schoolCardList}>
        {status === 'loading'
          ? ''
          : status === 'error'
          ? 'エラー'
          : data.schools
              .filter(school => school.uuid !== currentSchoolUuid)
              .map(school => (
                <SchoolCardMini key={school.uuid} school={school} />
              ))}
      </div>
      {status === 'success' && (
        <Card className={c.seeMoreCardContainer}>
          <ButtonBase className={c.seeMoreButtonBaseContainer} href="/">
            <Typography variant="body1">もっと見る</Typography>
          </ButtonBase>
        </Card>
      )}
    </div>
  )
}

export default RecommendedSchools
