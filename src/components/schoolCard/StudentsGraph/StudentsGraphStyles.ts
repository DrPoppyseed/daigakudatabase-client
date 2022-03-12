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
    studentsGraphContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      height: '100%',
      width: '100%',
      [theme.breakpoints.down('lg')]: {
        justifyContent: 'space-around',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    studentsTextBlock: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 0,
      },
    },
    nullStudentsGraphContainer: {
      height: 210,
      width: 450,
      display: 'flex',
      justifyContent: 'center',
    },
    raceNamesContainer: {
      overflow: 'auto',
      height: 170,
      width: 188,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 50,
      },
    },
    raceNameContainer: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        paddingTop: 2,
        paddingBottom: 2,
      },
    },
    raceIndicatorColorBox: {
      height: 10,
      width: 10,
      borderRadius: 10,
      marginRight: 5,
      opacity: 0.6,
      transition: '0.5s',
      transform: 'translate(0, -2px)',
    },
  })
)

export default useStyles
