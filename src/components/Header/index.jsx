// @flow
import * as React from 'react'
import clsx from 'clsx'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Grow,
  Popper,
  ClickAwayListener,
  Paper,
  MenuList,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  useMediaQuery,
} from '@material-ui/core'
import { connectSearchBox, connectHits } from 'react-instantsearch-dom'
import { useMutation, useQueryClient } from 'react-query'
import { AuthContext } from '../../AuthContext'

import { Search as SearchIcon, AccountCircle } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'
import { signOut } from '../../hooks/useAuth'
import SortByScroller from '../Home/SortByScroller'

const Header = (): React.Element<any> => {
  const c = useStyles()
  const queryClient = useQueryClient()
  const anchorRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)
  const [hitsOpen, setHitsOpen] = React.useState(false)
  const { user, setUser } = React.useContext(AuthContext)
  const sm_down = useMediaQuery(theme => theme.breakpoints.down('sm'))

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

  const SearchBox = ({ currentRefinement, refine }) => {
    // return (
    //   <ClickAwayListener onClickAway={() => setHitsOpen(false)}>
    //     <TextField
    //       className={c.searchInputBase}
    //       placeholder="大学名で検索する..."
    //       variant="outlined"
    //       type="search"
    //       value={currentRefinement}
    //       onFocus={() => {
    //         setHitsOpen(true)
    //       }}
    //       onChange={event => refine(event.currentTarget.value)}
    //       InputProps={{
    //         endAdornment: (
    //           <IconButton
    //             type="submit"
    //             className={c.searchIcon}
    //             aria-label="search">
    //             <SearchIcon />
    //           </IconButton>
    //         ),
    //       }}
    //     />
    //   </ClickAwayListener>
    // )

    // TODO: Move away from algolia search & implement own text search
    return <div />
  }

  // const CustomSearchBox = connectSearchBox(SearchBox)
  //
  // const Hits = ({ hits }) => {
  //   return (
  //     <Paper>
  //       <List
  //         component="nav"
  //         className={`c.hitsList ${hitsOpen ? c.hitsOpen : c.hitsClosed}`}>
  //         {hits.length ? (
  //           hits.length > 5 ? (
  //             hits.slice(0, 6).map((hit, index) =>
  //               index === 5 ? (
  //                 <ListItem
  //                   key="000000"
  //                   button
  //                   component="a"
  //                   className={c.hitItem}
  //                   href="/schools">
  //                   <ListItemText>もっと見る</ListItemText>
  //                 </ListItem>
  //               ) : (
  //                 <ListItem
  //                   key={hit.opeid}
  //                   button
  //                   component="a"
  //                   className={c.hitItem}
  //                   href={`/schools/${hit.institutionData.url}`}>
  //                   <ListItemText>{hit.name_en}</ListItemText>
  //                 </ListItem>
  //               )
  //             )
  //           ) : (
  //             hits.slice(0, 5).map(hit => (
  //               <ListItem
  //                 key={hit.opeid}
  //                 button
  //                 component="a"
  //                 className={c.hitItem}
  //                 href={`schools/${hit.institutionData.url}`}>
  //                 <ListItemText>{hit.name_en}</ListItemText>
  //               </ListItem>
  //             ))
  //           )
  //         ) : (
  //           <ListItem>
  //             <ListItemText>条件に合う大学が見つかりません。</ListItemText>
  //           </ListItem>
  //         )}
  //       </List>
  //     </Paper>
  //   )
  // }
  //
  // const CustomHits = connectHits(Hits)

  return (
    <div className={c.grow} id="back-to-top-anchor">
      <AppBar position="static" className={c.headerRoot}>
        <Toolbar className={c.toolbarRoot}>
          <Typography className={c.title} variant="h6" noWrap>
            <a href="/" className={c.titleLink}>
              <Typography>アメリカ大学</Typography>
              <Typography>データベース</Typography>
            </a>
          </Typography>
          <div className={c.grow} />
          {/*<div className={c.algoliaContainer}>*/}
          {/*  <CustomSearchBox />*/}
          {/*  <div className={c.hitsContainer}>*/}
          {/*    <CustomHits />*/}
          {/*  </div>*/}
          {/*</div>*/}
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
          {sm_down && <SortByScroller className={c.sortByScroller} />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
