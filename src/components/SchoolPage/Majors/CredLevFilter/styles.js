import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    borderRadius: 0,
    marginBottom: theme.spacing(2),
  },
  group: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
}))

export default useStyles
