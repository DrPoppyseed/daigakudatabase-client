import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    borderRadius: 0,
  },
  infoContainer: {
    height: 400,
  },
}))

export default useStyles
