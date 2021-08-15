import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  sortByScrollerContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    width: '100%',
  },
  filterIconButton: {
    marginRight: theme.spacing(4),
  },
  chipItemsContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'no-wrap',
    overflowX: 'auto',
    maxWidth: 400,
  },
  chipItem: {
    flex: '0 0 auto',
    marginRight: theme.spacing(1),
  },
  hitsChipItem: {
    marginRight: theme.spacing(1),
  },
}))

export default useStyles
