import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    marginBottom: theme.spacing(2),
    borderRadius: 0,
  },
  summaryTextArea: {},
  textAreaTitle: {
    marginBottom: theme.spacing(1),
  },
  textAreaContent: {
    // marginLeft: theme.spacing(4),
  },
}))

export default useStyles
