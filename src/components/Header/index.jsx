import * as React from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Button,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { useMutation, useQueryClient } from 'react-query'
import { AuthContext } from '../../AuthContext'

import { AccountCircle } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'
import { signOut } from '../../hooks/useAuth'
import SortByScroller from '../Home/SortByScroller'

const Header = () => {
  const c = useStyles()
  const queryClient = useQueryClient()
  const anchorRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)
  const { user, setUser } = React.useContext(AuthContext)
  const theme = useTheme()
  const sm_down = useMediaQuery(theme.breakpoints.down('sm'))

  const useSignOutOnClick = useMutation(signOut, {
    onSuccess: () => {
      setUser({ uid: '' })
      queryClient.invalidateQueries('schools')
      queryClient.invalidateQueries('schoolPage')
      localStorage.clear()
    },
  })

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  return (
    <div className={c.grow} id="back-to-top-anchor">
      <AppBar position="static" className={c.headerRoot}>
        <Toolbar className={c.toolbarRoot}>
          <div className={c.toolbarInnerRoot}>
            <Typography className={c.title} variant="h6" noWrap>
              <a href="/" className={c.titleLink}>
                <Typography>アメリカ大学</Typography>
                <Typography>データベース</Typography>
              </a>
            </Typography>
            <div className={c.grow} />
            <div className={c.profileMenu}>
              {user.uid ? (
                <React.Fragment>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    color="default"
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}>
                    <AccountCircle />
                  </IconButton>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                        }}>
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="menu-list-grow"
                              onKeyDown={handleListKeyDown}>
                              {/** TODO: enable profile after fixing profile page */}
                              <MenuItem
                                disabled
                                className={c.profileMenuItem}
                                onClick={() => handleClose()}>
                                <Typography variant="body2">
                                  <Link to="/mypage" className={c.menuItemLink}>
                                    プロフィール
                                  </Link>
                                </Typography>
                              </MenuItem>
                              <MenuItem
                                className={c.profileMenuItem}
                                onClick={() => useSignOutOnClick.mutate()}>
                                <Typography variant="body2">
                                  ログアウト
                                </Typography>
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </React.Fragment>
              ) : (
                <div className={c.buttonsContainer}>
                  <Button
                    variant="outlined"
                    color="primary"
                    className={c.authButton}>
                    <Link
                      to="/auth/signin"
                      className={clsx(c.authButtonLink, c.signinButtonLink)}>
                      ログイン
                    </Link>
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={c.authButton}>
                    <Link
                      to="/auth/signup"
                      className={clsx(c.authButtonLink, c.signupButtonLink)}>
                      新規登録
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
          {sm_down ? <SortByScroller className={c.sortByScroller} /> : ''}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
