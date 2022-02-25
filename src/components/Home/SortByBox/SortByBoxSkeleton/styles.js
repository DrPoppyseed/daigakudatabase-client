// @flow
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    width: 900
  },
  divider: {
    flexGrow: 1
  },
  hitsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
}))

export default useStyles