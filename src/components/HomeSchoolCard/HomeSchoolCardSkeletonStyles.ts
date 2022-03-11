import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardContainer: {
      width: 900,
      marginBottom: theme.spacing(1),
      padding: theme.spacing(3),
      height: 373,
    },
    titleBlock: {
      marginBottom: theme.spacing(2),
    },
    bodyBlock: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
)

export default useStyles
