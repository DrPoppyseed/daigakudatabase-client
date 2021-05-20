import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  rootBackground: {
    backgroundColor: theme.palette.background.default,

    position: 'relative',
    minHeight: '100vh',
  },
  appContainer: {
    paddingTop: theme.spacing(10),
  },
  homeRoot: {
    flexGrow: 1,
    padding: theme.spacing(4),
    display: 'grid',
    gridSpacing: theme.spacing(4),
    gridTemplateColumns: '1fr 300px 20px 700px 1fr !important',
  },
  filterContainer: {
    gridColumn: 2,
  },
  cardsContainer: {
    gridColumn: 4,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  myPageRoot: {
    flexGrow: 1,
    padding: theme.spacing(4),
    display: 'grid',
    gridSpacing: theme.spacing(4),
    gridTemplateColumns: '1fr 300px 20px 700px 1fr',
  },
  myPageContainer: {
    gridColumn: '2 / 5',
    width: '100%',
  },
  profileItemContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  profileSummaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  likedSchoolsContainer: {},
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginBottom: 20,
  },
}))

export default useStyles
