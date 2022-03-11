import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(3),
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: 900,
      },
    },
    divider: {
      flexGrow: 1,
    },
    hitsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    select: {
      width: 220,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    filterIconButton: {
      marginRight: theme.spacing(2),
    },
  })
)

export default useStyles
