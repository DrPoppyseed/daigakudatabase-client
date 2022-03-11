import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appContainer: {
      paddingTop: theme.spacing(14),
      [theme.breakpoints.down('lg')]: {
        paddingRight: 0,
        paddingLeft: 0,
      },
    },
    loadingContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      marginBottom: 20,
    },
  })
)

export default useStyles
