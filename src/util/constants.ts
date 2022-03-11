import { SATRange } from '../types/SATRange'
import { TuitionRange } from '../types/TuitionRange'

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

export const States = [
  { en: 'AL', ja: 'アラバマ州' },
  { en: 'AK', ja: 'アラスカ州' },
  { en: 'AZ', ja: 'アリゾナ州' },
  { en: 'AR', ja: 'アーカンソー州' },
  { en: 'CA', ja: 'カリフォルニア州' },
  { en: 'CO', ja: 'コロラド州' },
  { en: 'CT', ja: 'コネチカット州' },
  { en: 'DE', ja: 'デラウェア州' },
  { en: 'FL', ja: 'フロリダ州' },
  { en: 'GA', ja: 'ジョージア州' },
  { en: 'HI', ja: 'ハワイ州' },
  { en: 'ID', ja: 'アイダホ州' },
  { en: 'IL', ja: 'イリノイ州' },
  { en: 'IN', ja: 'インディアナ州' },
  { en: 'IA', ja: 'アイオワ州' },
  { en: 'KS', ja: 'カンザス州' },
  { en: 'KY', ja: 'ケンタッキー州' },
  { en: 'LA', ja: 'ルイジアナ州' },
  { en: 'ME', ja: 'メーン州' },
  { en: 'MD', ja: 'メリーランド州' },
  { en: 'MA', ja: 'マサチューセッツ州' },
  { en: 'MI', ja: 'ミシガン州' },
  { en: 'MN', ja: 'ミネソタ州' },
  { en: 'MS', ja: 'ミシシッピ－州' },
  { en: 'MO', ja: 'ミズーリ州' },
  { en: 'MT', ja: 'モンタナ州' },
  { en: 'NB', ja: 'ネブラスカ州' },
  { en: 'NV', ja: 'ネバダ州' },
  { en: 'NH', ja: 'ニューハンプシャー州' },
  { en: 'NJ', ja: 'ニュージャージー州' },
  { en: 'NY', ja: 'ニューメキシコ州' },
  { en: 'NY', ja: 'ニューヨーク州' },
  { en: 'NC', ja: 'ノースカロライナ州' },
  { en: 'ND', ja: 'ノースダコタ州' },
  { en: 'OH', ja: 'オハイオ州' },
  { en: 'OK', ja: 'オクラホマ州' },
  { en: 'OR', ja: 'オレゴン州' },
  { en: 'PA', ja: 'ペンシルバニア州' },
  { en: 'RI', ja: 'ロードアイランド州' },
  { en: 'SC', ja: 'サウスカロライナ州' },
  { en: 'SD', ja: 'サウスダコタ州' },
  { en: 'TN', ja: 'テネシー州' },
  { en: 'TX', ja: 'テキサス州' },
  { en: 'UT', ja: 'ユタ州' },
  { en: 'VT', ja: 'バーモント州' },
  { en: 'VA', ja: 'バージニア州' },
  { en: 'WA', ja: 'ワシントン州' },
  { en: 'WV', ja: 'ウェストバージニア州' },
  { en: 'WI', ja: 'ウィスコンシン州' },
  { en: 'WY', ja: 'ワイオミング州' },
  { en: 'DC', ja: 'ワシントンＤＣ' },
]

export const PageMetaTitles = {
  HOME: 'ホーム',
}
