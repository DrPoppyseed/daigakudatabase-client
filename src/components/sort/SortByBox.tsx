import * as React from 'react'
import { FC } from 'react'
import {
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'

import useStyles from './SortByBoxStyles'
import { useAppDispatch, useAppSelector } from '../../hooks/useFilter'
import { changeSortBy } from '../../features/paramsSlice'
import { SortByTypes } from '../../types/SortByTypes'

interface SortByBoxProps {
  data: any
}

const SortByBox: FC<SortByBoxProps> = ({ data }) => {
  const c = useStyles()
  const params = useAppSelector(state => state.params)
  // const md_down = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  const dispatch = useAppDispatch()

  const handleSortByChange = (e: SelectChangeEvent) => {
    dispatch(changeSortBy(e.target.value as SortByTypes))
  }

  return (
    <Card className={c.root}>
      {/*{md_down && (*/}
      {/*  <IconButton*/}
      {/*    className={c.filterIconButton}*/}
      {/*    onClick={e => handleFilterDrawerOpen(e)}*/}
      {/*    size='large'*/}
      {/*  >*/}
      {/*    <Badge variant='dot' color='secondary'>*/}
      {/*      <TuneIcon />*/}
      {/*    </Badge>*/}
      {/*  </IconButton>*/}
      {/*)}*/}
      <div className={c.hitsContainer}>
        <Typography variant='h5'>
          {data.totalSchoolsFound} 校を見つけました
        </Typography>
        <Typography variant='caption'>
          {`${
            data.totalSchoolsFound >= 10 ? 10 : data.totalSchoolsFound
          }校表示中 ページ ${params.page} / ${Math.ceil(
            data.totalSchoolsFound / 10
          )}`}
        </Typography>
      </div>
      <div className={c.divider} />
      <FormControl>
        <InputLabel id='select-sort-label'>条件で並べる</InputLabel>
        <Select
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
          className={c.select}
          value={params.sortBy}
          defaultValue='default'
          onChange={handleSortByChange}
        >
          <MenuItem value='default'>特になし</MenuItem>
          <MenuItem value='tuition-ascending'>学費が低い順</MenuItem>
          <MenuItem value='tuition-descending'>学費が高い順</MenuItem>
          <MenuItem value='sat-ascending'>SATの必要得点が低い順</MenuItem>
          <MenuItem value='sat-descending'>SATの必要得点が高い順</MenuItem>
        </Select>
      </FormControl>
    </Card>
  )
}

export default SortByBox
