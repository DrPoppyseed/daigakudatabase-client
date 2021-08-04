// @flow
import * as React from 'react'
import {
  Card,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@material-ui/core'

import useStyles from './styles'

const SortByBox = ({
  hits,
  pageNumber,
  sortSelection,
  handleSortSelectionChange,
}: {
  hits: Number,
  pageNumber: Number,
  sortSelection: String,
  handleSortSelectionChange: any,
}): React.Element<any> => {
  const c = useStyles()

  return (
    <Card className={c.root}>
      <div className={c.hitsContainer}>
        <Typography variant="h5">{hits} 校を見つけました</Typography>
        <Typography variant="caption">
          {`${hits >= 10 ? 10 : hits}校表示中 ページ ${pageNumber} / ${Math.ceil(
            hits / 10
          )}`}
        </Typography>
      </div>
      <div className={c.divider}></div>
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
