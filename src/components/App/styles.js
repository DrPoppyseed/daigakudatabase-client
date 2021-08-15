import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appContainer: {
    paddingTop: theme.spacing(14),
    [theme.breakpoints.down('md')]: {
      paddingRight: 0,
      paddingLeft: 0,
    },
  },
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginBottom: 20,
  },
}))

export default useStyles
