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
import React, { FC } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { signOut } from '../../hooks/useAuth'
import { AuthContext } from '../../AuthContext'

export interface AccountPopper {
  open: boolean
  setOpen: (state: boolean) => void
  anchorRef: any
}

const AccountPopper: FC<AccountPopper> = ({ open, setOpen, anchorRef }) => {
  const queryClient = useQueryClient()
  const { setUser } = React.useContext(AuthContext)

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
                      プロフィール
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={() => useSignOutOnClick.mutate()}>
                  <Typography variant='body2'>ログアウト</Typography>
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
