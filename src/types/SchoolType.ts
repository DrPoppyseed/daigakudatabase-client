import { Defaults } from '../util/constants'

export type SchoolType = {
  fourYear: boolean
  twoYear: boolean
  publicSchool: boolean
  privateSchool: boolean
}

export type SchoolTypes =
  typeof Defaults.SCHOOL_TYPE[keyof typeof Defaults.SCHOOL_TYPE]
