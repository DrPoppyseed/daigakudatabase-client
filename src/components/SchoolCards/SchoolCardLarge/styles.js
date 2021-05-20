import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  imgContainer: {
    width: 190,
    height: 200,
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    height: 200,
    width: 700,
  },
  cardTextContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: theme.spacing(2),
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  cardTextArea: {
    paddingRight: theme.spacing(2),
  },
  breadcrumbContainer: {
    paddingBottom: '.5rem',
  },
  shortSummary: {
    marginTop: '.5rem !important',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  ratingText: {
    paddingLeft: theme.spacing(1),
  },
  bottomGroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  actionGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}))

export default useStyles
