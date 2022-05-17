import { ClickAwayListener, Grow, Link, MenuItem, MenuList, Paper, Popper, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { signOut } from '@/hooks/useAuth'

export interface AccountPopperProps {
  open: boolean
  setOpen: (state: boolean) => void
  anchorRef: any
}

const AccountPopper: FC<AccountPopperProps> = ({
  open,
  setOpen,
  anchorRef,
}) => {
  const handleClose = () => {
    setOpen(false)
  }

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom' ? 'center top' : 'center bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id='menu-list-grow'
                onKeyDown={handleListKeyDown}
              >
                <MenuItem disabled onClick={handleClose}>
                  <Typography variant='body2'>
                    <Link
                      to='/account'
                      component={RouterLink}
                      sx={{
                        color: 'palette.shared.black',
                      }}
                    >
                      <FormattedMessage id='header.account_popper.menu_item.profile' />
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={signOut}>
                  <Typography variant='body2'>
                    <FormattedMessage id='header.account_popper.menu_item.signout' />
                  </Typography>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}

export default AccountPopper
