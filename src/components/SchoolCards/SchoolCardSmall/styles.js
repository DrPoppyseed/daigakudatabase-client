import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  schoolLinkContainer: {
    textDecoration: 'none',
    alignSelf: 'flex-start',
  },
  schoolName: {
    color: theme.palette.common.black,
    marginBottom: theme.spacing(1),
  },
  iconButton: {
    alignSelf: 'flex-start',
    margin: -theme.spacing(1),
  },
  icon: {},
}))

export default useStyles
