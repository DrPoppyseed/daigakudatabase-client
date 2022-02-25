// @flow
import * as React from 'react'
import { Drawer } from '@material-ui/core'
import useStyles from './styles.js'
import FilterInner from '../FilterCommon/FilterInner'
import { HomeContext } from '../../../HomeContext'

const FilterDrawer = (): React.Node => {
  const c = useStyles()
  const { isFilterDrawerOpen, handleFilterDrawerOpen } =
    React.useContext(HomeContext)

  return (
    <Drawer
      anchor="left"
      open={isFilterDrawerOpen}
      onClose={e => handleFilterDrawerOpen(e)}
      className={c.drawerContainer}>
      <FilterInner />
    </Drawer>
  )
}

export default FilterDrawer
