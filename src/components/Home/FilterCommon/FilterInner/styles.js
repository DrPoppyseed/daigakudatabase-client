import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  filterInnerContainer: {
    paddingTop: theme.spacing(3),
  },
  listItem: {
    padding: theme.spacing(2),
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
  buttonGroupContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default useStyles
