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
    backgroundColor: 'grey',
    marginLeft: theme.spacing(1)
  },
}))

export default useStyles