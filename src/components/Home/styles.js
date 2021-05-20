import { makeStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
    display: 'grid',
    gridSpacing: theme.spacing(4),
    gridTemplateColumns: '1fr 300px 20px 700px 1fr',
  },
  rootLoading: { height: '100vh' },
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
  filterContainer: {
    gridColumn: 2,
  },
  cardsContainer: {
    gridColumn: 4,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pagination: {
    marginTop: theme.spacing(2),
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
