import React, { useRef, useState } from 'react'
import { IconButton } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import AccountPopper from './AccountPopper'

const AccountBlock = () => {
  const anchorRef = useRef(null)
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  return (
    <>
      <IconButton
        edge='end'
        aria-label='account of current userRouter'
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
    </>
  )
}

export default AccountBlock
