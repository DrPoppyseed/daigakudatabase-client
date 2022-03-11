import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    childboxChild: {
      marginLeft: theme.spacing(2),
    },
    selectMajorContainer: {
      width: '100%',
    },
  })
)

export default useStyles
