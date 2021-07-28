import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: '900px',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),

  },
  bodyBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  logoContainer: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(2),
    backgroundColor: 'grey'
  },
  datacardsBlock: {
    display: 'flex',
    alignItems: 'flex-start'

  },
  datacardsContainer: {},
  datacardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(0.5)
  },
  datacardTitleContainer: {},
  datacardBodyContainer: {
    padding: theme.spacing(0.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  datacardSummaryItem: {
    // backgroundColor: 'grey',
    width: '350px',
    // padding: theme.spacing(0.5)
  },
  graphsBlock: {

  },
  programsContainer: {

  },
  programsGraphContainer: {
    display: 'flex',
    padding: theme.spacing(0.5),
  },
  programsNamesBlock: {
  },
  programsTitleContainer: {
  },
  programsNamesContainer: {
    maxHeight: 200,
    width: 300,
    overflow: 'auto',
    postition: 'relative',
  },
  active: {
    backgroundColor: 'yellow',
    color: 'yellow'
  }
}))

export default useStyles