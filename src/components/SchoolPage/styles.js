import { makeStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 700px 20px 300px 1fr',
    padding: theme.spacing(4),
  },
  reportContainer: {
    gridColumn: 2,
  },
  recommendationContainer: {
    gridColumn: 4,
  },
  tabContentContainer: {
    marginTop: theme.spacing(3),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  fab: {
    color: theme.palette.common.white + ' !important',
    backgroundColor: green[500] + ' !important',
    '&:hover': {
      backgroundColor: green[600] + ' !important',
    },
  },
  fabIcon: {
    color: 'inherit',
  },
  loadingContainer: {
    marginTop: 100,
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
