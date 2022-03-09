import * as React from 'react'
import { Button, Container, Divider, ListItem } from '@mui/material'
import clsx from 'clsx'
import SATSlider from '../SATSlider'
import TuitionSlider from '../TuitionSlider/TuitionSlider'
import UrbanButtonGroup from '../UrbanButtonGroup/UrbanizationLevelButtonGroup'
import StateSelector from '../StateSelector/StateSelector'
import SchoolTypeCheckboxes from '../SchoolTypeCheckboxes/index'
import { Delete as DeleteIcon } from '@mui/icons-material'
import useStyles from './styles'
import { HomeContext } from '../../../../HomeContext'
import { useAppDispatch, useAppSelector } from '../../../../hooks/useFilter'
import { increment } from '../../../../features/filter/filterSlice'

const FilterInner = () => {
  const c = useStyles()
  const { handleSearchClick, handleClearCriteria } =
    React.useContext(HomeContext)

  // const locationState = useAppSelector((state) => state.location.state)
  const count = useAppSelector(state => state.filter.count)
  const dispatch = useAppDispatch()

  const handleCount = () => {
    dispatch(increment())
  }

  return (
    <Container className={c.filterInnerContainer}>
      <ListItem className={c.listItem}>
        <Button
          variant='contained'
          color='primary'
          className={c.filterSearchButton}
          onClick={handleSearchClick}
        >
          条件がけで検索
        </Button>
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
        <Button
          variant='outlined'
          color='primary'
          startIcon={<DeleteIcon />}
          className={c.filterSearchButton}
          onClick={handleClearCriteria}
        >
          条件をクリアする
        </Button>
      </ListItem>
      <ListItem className={c.listItem}>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => handleCount()}
        >
          Hello {count}
        </Button>
      </ListItem>
    </Container>
  )
}

export default FilterInner
