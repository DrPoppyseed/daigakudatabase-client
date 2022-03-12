import { Theme } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    datacardsBlock: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'row',
        width: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
      },
    },
    datacardContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      padding: theme.spacing(0.5),
      flexDirection: 'column',
      width: 350,
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    },
    datacardBodyContainer: {
      padding: theme.spacing(0.5),
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    datacardSummaryItem: {
      width: 350,
      [theme.breakpoints.down('lg')]: {
        width: '100%',
      },
    },
  })
)

export default useStyles
