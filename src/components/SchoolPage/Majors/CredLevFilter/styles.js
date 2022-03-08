import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
    borderRadius: 0,
    marginBottom: theme.spacing(2),
  },
  group: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
}))

export default useStyles
