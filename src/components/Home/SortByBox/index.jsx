import * as React from 'react'
import {
  Badge,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import { Tune as TuneIcon } from '@material-ui/icons'
import { HomeContext } from '../../../HomeContext'

import useStyles from './styles'

const SortByBox = () => {
  const c = useStyles()
  const {
    handleFilterDrawerOpen,
    data,
    pageNumber,
    sortSelection,
    handleSortSelectionChange,
  } = React.useContext(HomeContext)
  const md_down = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Card className={c.root}>
      {md_down && (
        <IconButton
          className={c.filterIconButton}
          onClick={e => handleFilterDrawerOpen(e)}>
          <Badge variant="dot" color="secondary">
            <TuneIcon />
          </Badge>
        </IconButton>
      )}
      <div className={c.hitsContainer}>
        <Typography variant="h5">
          {data.totalSchoolsFound} 校を見つけました
        </Typography>
        <Typography variant="caption">
          {`${
            data.totalSchoolsFound >= 10 ? 10 : data.totalSchoolsFound
          }校表示中 ページ ${pageNumber} / ${Math.ceil(
            data.totalSchoolsFound / 10
          )}`}
        </Typography>
      </div>
      <div className={c.divider} />
      <FormControl className={c.formContainer}>
        <InputLabel id="select-sort-label">条件で並べる</InputLabel>
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
            getContentAnchorEl: null,
          }}
          labelId="select-sort-label"
          id="select-sort"
          className={c.select}
          value={sortSelection}
          defaultValue="default"
          onChange={handleSortSelectionChange}>
          <MenuItem value="default">特になし</MenuItem>
          <MenuItem value="tuition-ascending">学費が低い順</MenuItem>
          <MenuItem value="tuition-descending">学費が高い順</MenuItem>
          <MenuItem value="sat-ascending">SATの必要得点が低い順</MenuItem>
          <MenuItem value="sat-descending">SATの必要得点が高い順</MenuItem>
        </Select>
      </FormControl>
    </Card>
  )
}

export default SortByBox
