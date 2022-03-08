import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // marginBottom: theme.spacing(2),
    borderRadius: 0,
  },
  title: { marginBottom: theme.spacing(2) },
  mapsContainer: {},
}))

export default useStyles
