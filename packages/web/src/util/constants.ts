import { SATRange } from '@/types/SATRange'
import { TuitionRange } from '@/types/TuitionRange'
import { GraphicsObject } from '@/types/common'

export const DEFAULT_SAT_RANGE_LOW = 600
export const DEFAULT_SAT_RANGE_HIGH = 1600
export const DEFAULT_TUITION_RANGE_LOW = 0
export const DEFAULT_TUITION_RANGE_HIGH = 60000

export const Defaults = {
  SAT_RANGE: [DEFAULT_SAT_RANGE_LOW, DEFAULT_SAT_RANGE_HIGH] as SATRange,
  TUITION_RANGE: [
    DEFAULT_TUITION_RANGE_LOW,
    DEFAULT_TUITION_RANGE_HIGH,
  ] as TuitionRange,
  SCHOOL_TYPE: {
    fourYear: false,
    twoYear: false,
    publicSchool: false,
    privateSchool: false,
  },
}

export const SortTypes = {
  DEFAULT: 'default',
}

export const PageMetaTitles = {
  HOME: 'ホーム',
}

export const SexGraphics: GraphicsObject = {
  men: {
    color: '#42A5F5',
    ja: '男性',
  },
  women: {
    color: '#F4511E',
    ja: '女性',
  },
}
