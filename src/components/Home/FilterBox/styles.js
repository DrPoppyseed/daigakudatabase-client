import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  childboxChild: {
    marginLeft: theme.spacing(2),
  },
  selectMajorContainer: {
    width: '100%',
  },
}))

export default useStyles
