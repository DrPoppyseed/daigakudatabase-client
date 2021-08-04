// @flow
import * as React from 'react'
import clsx from 'clsx'
import {
  Paper,
  Container,
  ListItem,
  List,
  Divider,
  Button,
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import useStyles from './styles'
import SchoolTypeForm from './SchoolTypeForm'
import StateSelector from './StateSelector'
import SATSlider from './SATSlider'
import TuitionSlider from './TuitionSlider'
import UrbanButtonGroup from './UrbanButtonGroup'

const FilterBox = (props: any): React.Element<any> => {
  const c = useStyles()

  return (
    <Paper className={c.root}>
      <Container>
        <List>
          <ListItem className={c.listItem}>
            <Button
              variant="contained"
              color="primary"
              className={c.filterSearchButton}
              onClick={props.handleSearchClick}>
              条件がけで検索
            </Button>
          </ListItem>
          <Divider />
          <ListItem className={c.listItem}>
            <SchoolTypeForm
              handleFilterChange={props.handleFilterChange}
              states={props.states}
            />
          </ListItem>
          <Divider />
          <ListItem className={clsx(c.testRangeContainer, c.listItem)}>
            <SATSlider
              handleSatRange={props.handleSatRange}
              states={props.states}
            />
          </ListItem>
          <Divider />
          <ListItem className={c.listItem}>
            <TuitionSlider
              handleTuitionRange={props.handleTuitionRange}
              states={props.states}
            />
          </ListItem>
          <Divider />
          <ListItem className={clsx(c.buttonGroupContainer, c.listItem)}>
            <UrbanButtonGroup
              handleUrbanizationLevel={props.handleUrbanizationLevel}
              states={props.states}
            />
          </ListItem>
          <Divider />
          <ListItem className={c.listItem}>
            <StateSelector
              handleStateLocationChange={props.handleStateLocationChange}
              states={props.states}
            />
          </ListItem>
          <Divider />
          <ListItem className={c.listItem}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<DeleteIcon />}
              className={c.filterSearchButton}
              onClick={props.handleClearCriteria}>
              条件をクリアする
            </Button>
          </ListItem>
        </List>
      </Container>
    </Paper>
  )
}

export default FilterBox
