import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: 900,
    },
  },
  titleBlock: {
    display: 'flex',
    marginBottom: theme.spacing(2),
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  buttonContainer: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'inline-block',
    },
  },
  buttonLink: {
    textDecoration: 'None',
    color: 'white',
  },
  bodyBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoContainer: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(2),
    backgroundColor: 'grey',
    marginLeft: theme.spacing(1),
  },
}))

export default useStyles
