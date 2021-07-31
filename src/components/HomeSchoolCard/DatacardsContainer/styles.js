// @flow
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  datacardsBlock: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  datacardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing(0.5),
    width: 350
  },
  datacardBodyContainer: {
    padding: theme.spacing(0.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  datacardSummaryItem: {
    width: '350px',
  }
}))

export default useStyles