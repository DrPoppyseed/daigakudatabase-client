import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  satRangeSlider: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  satRangeText: {
    marginBottom: theme.spacing(1),
  },
}))

export default useStyles
