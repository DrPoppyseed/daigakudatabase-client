import { makeStyles } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'grid',
    gridSpacing: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '0px auto 0px',
      gridSpacing: theme.spacing(2),
    },
    [theme.breakpoints.between('md', 'lg')]: {
      gridTemplateColumns: '1fr 900px 1fr',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '1fr 300px 10px 900px 1fr',
    },
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
    display: 'block',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
    gridColumn: 2,
  },
  cardsContainer: {
    gridColumn: 2,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: 900,
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: 4,
    },
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
