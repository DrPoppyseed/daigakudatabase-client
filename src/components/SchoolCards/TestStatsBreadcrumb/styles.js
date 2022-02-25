import { makeStyles, fade } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  statGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  statItemContainer: {
    display: 'flex',
    alignItems: 'center',
    // marginRight: theme.spacing(2),
    color: fade(theme.palette.common.black, 0.6),
  },
  statItemIcon: {
    marginRight: theme.spacing(0.5),
  },
  yellow: {
    color: theme.palette.warning.main,
  },
  blue: {
    color: theme.palette.info.main,
  },
}))

export default useStyles
