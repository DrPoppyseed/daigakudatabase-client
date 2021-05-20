import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // padding: theme.spacing(1),
  },
  listItem: {
    padding: theme.spacing(2),
  },
  checkbox: {
    height: 30,
    width: 30,
  },
  childboxChild: {
    marginLeft: theme.spacing(2),
  },
  filterSearchButton: {
    width: '100%',
  },
  satRangeSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  satRangeText: {
    marginBottom: theme.spacing(1),
  },
  toeflRangeSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    // marginBottom: theme.spacing(2),
  },
  toeflRangeText: {
    marginBottom: theme.spacing(1),
  },
  testRangeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  tuitionRangeSlider: {
    width: '100%',
  },
  tuitionRangeText: {
    marginBottom: theme.spacing(1),
  },
  selectStateContainer: {
    width: '100%',
  },
  selectMajorContainer: {
    width: '100%',
  },
}))

export default useStyles
