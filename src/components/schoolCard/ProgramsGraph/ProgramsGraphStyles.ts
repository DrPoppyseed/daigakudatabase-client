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
    programsNamesContainer: {
      overflow: 'auto',
    },
    programNameContainer: {
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
      },
    },
    programNameColorBox: {
      height: 10,
      width: 10,
      minWidth: 10,
      marginRight: 5,
      opacity: 0.5,
      display: 'inline-block',
      transform: 'translate(0, -1px)',
      transition: '0.5s',
    },
    squareActive: {
      opacity: 1,
      transition: '0.5s',
    },
    nullProgramsContainer: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: 60,
      width: 450,
      height: 210,
    },
  })
)

export default useStyles
