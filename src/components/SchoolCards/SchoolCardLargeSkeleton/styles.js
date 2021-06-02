import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    height: 230,
    width: 700,
  },
  textContainer: {
    height: 230,
    width: 480,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  cardTitle: {
    marginBottom: theme.spacing(2),
  },
  cardText: {},
  stats: {},
}))

export default useStyles
