import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  profileItemContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  likedSchoolsContainer: {},
  likedSchoolsAreaTitle: {
    marginBottom: theme.spacing(2),
  },
  likedSchoolsGridArea: {
    display: 'grid',
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      // rowGap: theme.spacing(2),
      // columnGap: theme.spacing(2),
      gap: theme.spacing(2),
    },
  },
}))

export default useStyles
