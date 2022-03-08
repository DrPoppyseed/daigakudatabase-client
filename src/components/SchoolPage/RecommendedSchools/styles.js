import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  recommendationTitle: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
  },
  schoolCardList: {},
  schoolCardContainer: {
    padding: theme.spacing(2),
  },
  seeMoreCardContainer: {
    marginTop: theme.spacing(2),
    borderRadius: 0,
  },
  seeMoreButtonBaseContainer: {
    padding: theme.spacing(2),
    width: 300,
  },
}))

export default useStyles
