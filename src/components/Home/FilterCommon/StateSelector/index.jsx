// @flow
import * as React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import useStyles from './styles.js'
import { HomeContext } from '../../../../HomeContext'

const StateSelector = () => {
  const c = useStyles()
  const { stateLocation, handleStateLocationChange } =
    React.useContext(HomeContext)

  return (
    <FormControl className={c.selectStateContainer}>
      <InputLabel id="select-state-label">州別でみる</InputLabel>
      <Select
        labelId="select-state-label"
        id="select-state"
        value={stateLocation}
        onChange={handleStateLocationChange}>
        <MenuItem value="">特になし</MenuItem>
        <MenuItem value="AL">アラバマ州</MenuItem>
        <MenuItem value="AK">アラスカ州</MenuItem>
        <MenuItem value="AZ">アリゾナ州</MenuItem>
        <MenuItem value="AR">アーカンソー州</MenuItem>
        <MenuItem value="CA">カリフォルニア州</MenuItem>
        <MenuItem value="CO">コロラド州</MenuItem>
        <MenuItem value="CT">コネチカット州</MenuItem>
        <MenuItem value="DE">デラウェア州</MenuItem>
        <MenuItem value="FL">フロリダ州</MenuItem>
        <MenuItem value="GA">ジョージア州</MenuItem>
        <MenuItem value="HI">ハワイ州</MenuItem>
        <MenuItem value="ID">アイダホ州</MenuItem>
        <MenuItem value="IL">イリノイ州</MenuItem>
        <MenuItem value="IN">インディアナ州</MenuItem>
        <MenuItem value="IA">アイオワ州</MenuItem>
        <MenuItem value="KS">カンザス州</MenuItem>
        <MenuItem value="KY">ケンタッキー州</MenuItem>
        <MenuItem value="LA">ルイジアナ州</MenuItem>
        <MenuItem value="ME">メーン州</MenuItem>
        <MenuItem value="MD">メリーランド州</MenuItem>
        <MenuItem value="MA">マサチューセッツ州</MenuItem>
        <MenuItem value="MI">ミシガン州</MenuItem>
        <MenuItem value="MN">ミネソタ州</MenuItem>
        <MenuItem value="MS">ミシシッピ－州</MenuItem>
        <MenuItem value="MO">ミズーリ州</MenuItem>
        <MenuItem value="MT">モンタナ州</MenuItem>
        <MenuItem value="NB">ネブラスカ州</MenuItem>
        <MenuItem value="NV">ネバダ州</MenuItem>
        <MenuItem value="NH">ニューハンプシャー州</MenuItem>
        <MenuItem value="NJ">ニュージャージー州</MenuItem>
        <MenuItem value="NY">ニューメキシコ州</MenuItem>
        <MenuItem value="NY">ニューヨーク州</MenuItem>
        <MenuItem value="NC">ノースカロライナ州</MenuItem>
        <MenuItem value="ND">ノースダコタ州</MenuItem>
        <MenuItem value="OH">オハイオ州</MenuItem>
        <MenuItem value="OK">オクラホマ州</MenuItem>
        <MenuItem value="OR">オレゴン州</MenuItem>
        <MenuItem value="PA">ペンシルバニア州</MenuItem>
        <MenuItem value="RI">ロードアイランド州</MenuItem>
        <MenuItem value="SC">サウスカロライナ州</MenuItem>
        <MenuItem value="SD">サウスダコタ州</MenuItem>
        <MenuItem value="TN">テネシー州</MenuItem>
        <MenuItem value="TX">テキサス州</MenuItem>
        <MenuItem value="UT">ユタ州</MenuItem>
        <MenuItem value="VT">バーモント州</MenuItem>
        <MenuItem value="VA">バージニア州</MenuItem>
        <MenuItem value="WA">ワシントン州</MenuItem>
        <MenuItem value="WV">ウェストバージニア州</MenuItem>
        <MenuItem value="WI">ウィスコンシン州</MenuItem>
        <MenuItem value="WY">ワイオミング州</MenuItem>
        <MenuItem value="DC">ワシントンＤＣ</MenuItem>
      </Select>
    </FormControl>
  )
}

export default StateSelector
