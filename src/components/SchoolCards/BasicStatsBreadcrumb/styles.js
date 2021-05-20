import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  breadcrumbContainer: {
    paddingBottom: '.5rem',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingText: {
    paddingLeft: theme.spacing(1),
  },
}))

export default useStyles
