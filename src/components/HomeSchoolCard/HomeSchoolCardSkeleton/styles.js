// @flow
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: 900,
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    height: 373
  },
  titleBlock: {
    marginBottom: theme.spacing(2),
  },
  bodyBlock: {
    display: 'flex',
    justifyContent: 'space-between'
  },
}))

export default useStyles