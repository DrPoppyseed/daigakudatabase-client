import { MenuItem, Select, SelectChangeEvent, styled } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import React from 'react'
import { SortTypes } from '@/util/constants'
import { useAppDispatch, useAppSelector } from '@/hooks/useFilter'
import { changeSortBy } from '@/features/paramsSlice'
import { SortByTypes } from '@/types/SortByTypes'

const SortBySelector = () => {
  const params = useAppSelector(state => state.params)
  const dispatch = useAppDispatch()

  const handleSortByChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(changeSortBy(e.target.value as SortByTypes))
  }

  return (
    <SelectContainer
      MenuProps={{
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left',
        },
        transformOrigin: {
          vertical: 'top',
          horizontal: 'left',
        },
      }}
      labelId='select-sort-label'
      id='select-sort'
      value={params.sortBy}
      defaultValue={SortTypes.DEFAULT}
      onChange={handleSortByChange}
    >
      <MenuItem value={SortTypes.DEFAULT}>
        <FormattedMessage id='sort.sort_box.select.menu_item.default' />
      </MenuItem>
      <MenuItem value='tuition-ascending'>
        <FormattedMessage id='sort.sort_box.select.menu_item.tuition_ascending' />
      </MenuItem>
      <MenuItem value='tuition-descending'>
        <FormattedMessage id='sort.sort_box.select.menu_item.tuition_descending' />
      </MenuItem>
      <MenuItem value='sat-ascending'>
        <FormattedMessage id='sort.sort_box.select.menu_item.sat_ascending' />
      </MenuItem>
      <MenuItem value='sat-descending'>
        <FormattedMessage id='sort.sort_box.select.menu_item.sat_descending' />
      </MenuItem>
    </SelectContainer>
  )
}

const SelectContainer = styled(Select)(() => ({
  width: 220,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export default SortBySelector
