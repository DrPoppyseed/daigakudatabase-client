// @flow
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  drawerContainer: {
    paddingTop: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    overflowX: 'auto',
  },
}))

export default useStyles
