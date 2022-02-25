import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {},
  tableItem: {},
  titleCell: {
    // minWidth: 20,
    // display: 'flex',
    // alignItems: 'center',
  },
  title: {
    fontWeight: 700,
    opacity: 0.8,
    letterSpacing: theme.spacing(0.2),
    marginLeft: theme.spacing(2),
    verticalAlign: 'middle',
    display: 'inline-flex',
  },
  content: {},
}))

export default useStyles
