import { SATRange } from './SATRange'
import { TuitionRange } from './TuitionRange'
import { SchoolType } from './SchoolType'

export type Filter = {
  state: string
  satRange: SATRange
  tuitionRange: TuitionRange
  schoolType: SchoolType
  urbanizationLevel: string
  major: string
}
