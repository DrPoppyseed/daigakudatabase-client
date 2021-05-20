import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  fabContainer: {
    position: 'fixed',
    bottom: theme.spacing(6),
    right: theme.spacing(6),
  },
}))

export default useStyles
