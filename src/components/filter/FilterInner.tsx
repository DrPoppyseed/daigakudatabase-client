import React from 'react'
import { Container, Divider, ListItem, styled } from '@mui/material'
import SATSlider from './SATSlider'
import TuitionSlider from './TuitionSlider'
import UrbanButtonGroup from './UrbanizationLevelButtonGroup'
import StateSelector from './StateSelector'
import SchoolTypeCheckboxes from './SchoolTypeCheckboxes'
import ClearFiltersButton from './ClearFiltersButton'
import SearchButton from './SearchButton'

const FilterInner = () => (
  <FilterInnerContainer>
    <FilterListItem>
      <SearchButton />
    </FilterListItem>
    <Divider />
    <FilterListItem>
      <SchoolTypeCheckboxes />
    </FilterListItem>
    <Divider />
    <FilterListItem
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <SATSlider />
    </FilterListItem>
    <Divider />
    <FilterListItem>
      <TuitionSlider />
    </FilterListItem>
    <Divider />
    <FilterListItem
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <UrbanButtonGroup />
    </FilterListItem>
    <Divider />
    <FilterListItem>
      <StateSelector />
    </FilterListItem>
    <Divider />
    <FilterListItem>
      <ClearFiltersButton />
    </FilterListItem>
  </FilterInnerContainer>
)

const FilterInnerContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(3),
}))

const FilterListItem = styled(ListItem)(({ theme }) => ({
  padding: theme.spacing(2),
}))

export default FilterInner
