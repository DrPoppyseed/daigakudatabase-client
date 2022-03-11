import React from 'react'
import { Fab, Theme, useScrollTrigger, Zoom } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { green } from '@mui/material/colors'

const ScrollTopFab = () => {
  const c = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: any) => {
    const anchor = event.target.ownerDocument.querySelector(
      '#back-to-top-anchor'
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role='presentation' className={c.fabContainer}>
        <Fab aria-label='key arrow up' className={c.fab}>
          <KeyboardArrowUpIcon className={c.fabIcon} />
        </Fab>
      </div>
    </Zoom>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fabContainer: {
      position: 'fixed',
      bottom: theme.spacing(6),
      right: theme.spacing(6),
    },
    fab: {
      color: theme.palette.common.white + ' !important',
      backgroundColor: green[500] + ' !important',
      '&:hover': {
        backgroundColor: green[600] + ' !important',
      },
    },
    fabIcon: {
      color: 'inherit',
    },
  })
)

export default ScrollTopFab
