import makeStyles from '@mui/styles/makeStyles'
import { green } from '@mui/material/colors'

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
  loadingContainer: {},
  loadingText: {
    marginBottom: 20,
  },
}))

export default useStyles
