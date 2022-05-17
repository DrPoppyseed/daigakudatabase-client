import { Filter } from './Filter'
import { SortByTypes } from './SortByTypes'

export type Params = {
  filter: Filter
  page: number
  sortBy: SortByTypes
}
