import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    borderRadius: 0,
    marginBottom: theme.spacing(1),
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: theme.spacing(1),
  },
  majorTitle: {
    marginBottom: theme.spacing(1),
  },
  divider: {},
  programsContainer: {},
}))

export default useStyles
