import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  listItem: {
    padding: theme.spacing(2),
  },
  childboxChild: {
    marginLeft: theme.spacing(2),
  },
  filterSearchButton: {
    width: '100%',
  },
  testRangeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  selectMajorContainer: {
    width: '100%',
  },
  buttonGroupContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default useStyles
