import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    graphContainer: {
      display: 'flex',
      padding: theme.spacing(0.5),
      height: 210,
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'space-around',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
        height: 260,
      },
    },
    nullGraphContainer: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 60,
      width: 220,
      height: 210,
    },
    testscoresAndTuitionContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        overflowX: 'auto',
        paddingLeft: theme.spacing(10),
      },
    },
  })
)

export default useStyles
