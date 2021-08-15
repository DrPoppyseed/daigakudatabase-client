// @flow
import * as React from 'react'
import { Paper, Chip, IconButton, Badge } from '@material-ui/core'
import useStyles from './styles'
import { Tune as TuneIcon } from '@material-ui/icons'
import SchoolTypeChip from './SchoolTypeChip'
import { HomeContext } from '../../../HomeContext'

const SortByScroller = () => {
  const c = useStyles()
  const {
    data,
    handleFilterDrawerOpen,
    filterState,
    filtersAppliedNum,
    handleSatRangeChipClick,
    handleTuitionRangeChipClick,
  } = React.useContext(HomeContext)

  React.useEffect(() => {
    console.log(filtersAppliedNum)
  }, [filtersAppliedNum])
  return (
    <Paper className={c.sortByScrollerContainer}>
      <IconButton
        className={c.filterIconButton}
        onClick={e => handleFilterDrawerOpen(e)}>
        <Badge variant="dot" color="secondary">
          <TuneIcon />
        </Badge>
      </IconButton>
      <div className={c.chipItemsContainer}>
        <Chip
          label={`${data.totalSchoolsFound} 校見つかりました`}
          variant="outlined"
          className={c.hitsChipItem}
        />
        <Chip
          label="SATの点数"
          variant="outlined"
          className={c.chipItem}
          onClick={() => handleSatRangeChipClick()}
        />
        <Chip
          label="学費"
          variant="outlined"
          className={c.chipItem}
          onClick={() => handleTuitionRangeChipClick()}
        />
        <SchoolTypeChip
          chipValue="twoYear"
          chipState={filterState.twoYear}
          label="２年制"
        />
        <SchoolTypeChip
          chipValue="fourYear"
          chipState={filterState.fourYear}
          label="４年制"
        />
        <SchoolTypeChip
          chipState={filterState.privateSchool}
          chipValue="privateSchool"
          label="私立"
        />
        <SchoolTypeChip
          chipState={filterState.publicSchool}
          chipValue="publicSchool"
          label="公立"
        />
      </div>
    </Paper>
  )
}

export default SortByScroller
