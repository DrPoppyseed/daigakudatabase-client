import * as React from 'react'
import { Container, Divider, ListItem } from '@mui/material'
import clsx from 'clsx'
import SATSlider from './SATSlider'
import TuitionSlider from './TuitionSlider'
import UrbanButtonGroup from './UrbanizationLevelButtonGroup'
import StateSelector from './StateSelector'
import SchoolTypeCheckboxes from './SchoolTypeCheckboxes'
import useStyles from './FilterInnerStyles'
import ClearFiltersButton from './ClearFiltersButton'
import SearchButton from './SearchButton'

const FilterInner = () => {
  const c = useStyles()

  return (
    <Container className={c.filterInnerContainer}>
      <ListItem className={c.listItem}>
        <SearchButton />
      </ListItem>
      <Divider />
      <ListItem className={c.listItem}>
        <SchoolTypeCheckboxes />
      </ListItem>
      <Divider />
      <ListItem className={clsx(c.testRangeContainer, c.listItem)}>
        <SATSlider />
      </ListItem>
      <Divider />
      <ListItem className={c.listItem}>
        <TuitionSlider />
      </ListItem>
      <Divider />
      <ListItem className={clsx(c.buttonGroupContainer, c.listItem)}>
        <UrbanButtonGroup />
      </ListItem>
      <Divider />
      <ListItem className={c.listItem}>
        <StateSelector />
      </ListItem>
      <Divider />
      <ListItem className={c.listItem}>
        <ClearFiltersButton />
      </ListItem>
    </Container>
  )
}

export default FilterInner
