import {
  ClickAwayListener,
  Grow,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React, { FC, useContext } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { FormattedMessage } from 'react-intl'
import { signOut } from '@/hooks/useAuth'
import { AuthContext } from '@/contexts/AuthContext'

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
  const queryClient = useQueryClient()
  const { setUser } = useContext(AuthContext)

  const handleClose = () => {
    setOpen(false)
  }

  const handleListKeyDown = (event: any) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  const useSignOutOnClick = useMutation(signOut, {
    onSuccess: async () => {
      setUser({ uid: '' })
      await queryClient.invalidateQueries('schools')
      await queryClient.invalidateQueries('schoolPage')
      localStorage.clear()
    },
  })

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
                        color: 'palette.common.black',
                      }}
                    >
                      <FormattedMessage id='header.account_popper.menu_item.profile' />
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => useSignOutOnClick.mutate()}>
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
