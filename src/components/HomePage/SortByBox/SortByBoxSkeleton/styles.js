import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    width: 900,
  },
  divider: {
    flexGrow: 1,
  },
  hitsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}))

export default useStyles
