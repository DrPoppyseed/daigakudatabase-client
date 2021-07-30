import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    width: '900px',
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
  },
  titleBlock: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-between'
  },
  button: {
  },
  buttonLink: {
    textDecoration: 'None',
    color: 'white'
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
    padding: theme.spacing(0.5),
    width: 350
  },
  datacardTitleContainer: {},
  datacardBodyContainer: {
    padding: theme.spacing(0.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  datacardSummaryItem: {
    width: '350px',
  },
  graphsBlock: {
  },
}))

export default useStyles