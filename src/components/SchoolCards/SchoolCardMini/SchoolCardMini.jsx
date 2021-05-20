//@flow
import * as React from 'react'
import useStyles from './styles'
import {
  Card,
  Typography,
  Breadcrumbs,
  Tooltip,
  ButtonBase,
} from '@material-ui/core'
import { TurnedIn, TurnedInNot } from '@material-ui/icons'

import { AuthContext } from '../../../AuthContext'

const SchoolCardMini = ({ school }: { school: Object }): React.Element<any> => {
  const c = useStyles()
  const authContext = React.useContext(AuthContext)

  return (
    <Card className={c.cardRoot}>
      <ButtonBase href={`${school.url}`} className={c.buttonBaseRoot}>
        <img
          src={`${school.page_img_src}`}
          thumb={`${school.page_img_src}`}
          alt={`${school.card_img_alt}`}
          className={c.img}
        />
        <div className={c.textContainer}>
          <Typography variant="body2">{school.name_en}</Typography>
          <div className={c.infoContainer}>
            <Breadcrumbs aria-label={`link to ${school.name_en} page`}>
              <Typography variant="caption">{school.school_type}</Typography>
              <Typography variant="caption">{school.year_type}</Typography>
              <Typography variant="caption">{school.state_postcode}</Typography>
            </Breadcrumbs>
            {!!authContext.user.uid ? (
              school.isLiked ? (
                <TurnedIn disabled fontSize="small" />
              ) : (
                <TurnedInNot disabled fontSize="small" />
              )
            ) : (
              <Tooltip title="ログインして学校をお気に入り登録しよう！">
                <TurnedInNot disabled fontSize="small" />
              </Tooltip>
            )}
          </div>
        </div>
      </ButtonBase>
    </Card>
  )
}

export default SchoolCardMini
