import * as React from 'react'
import { IconButton } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import AccountPopper from './AccountPopper'

const AccountBlock = () => {
  const anchorRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <React.Fragment>
      <IconButton
        edge='end'
        aria-label='account of current user'
        color='default'
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
        size='large'
      >
        <AccountCircle />
      </IconButton>
      <AccountPopper open={open} setOpen={setOpen} anchorRef={anchorRef} />
    </React.Fragment>
  )
}

export default AccountBlock
