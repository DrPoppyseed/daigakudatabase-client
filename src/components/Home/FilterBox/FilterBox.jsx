// @flow
import * as React from 'react'
import clsx from 'clsx'
import {
  Paper,
  Container,
  Typography,
  FormControl,
  FormLabel,
  FormGroup,
  ListItem,
  List,
  Divider,
  Button,
  Slider,
  Select,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import { Delete as DeleteIcon } from '@material-ui/icons'
import useStyles from './styles'
import CheckboxChild from '../../Common/CheckboxChild/CheckboxChild'

const FilterBox = (props: any): React.Element<any> => {
  const c = useStyles()

  const {
    fourYear,
    twoYear,
    publicSchool,
    privateSchool,
    // communityCollege,
    // liberalArtsCollege,
    // technicalCollege,
    // other,
  } = props.states.filterState

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
            {/** Type of university: ４年制、州立、私立、短大 etc */}
            <FormControl>
              <FormLabel component="legend">大学の区分</FormLabel>
              <FormGroup>
                <div>
                  <CheckboxChild
                    label="４年制"
                    name="fourYear"
                    checked={fourYear}
                    onChange={props.handleFilterChange}
                    className={c.checkbox}
                  />
                  <CheckboxChild
                    label="２年制"
                    name="twoYear"
                    checked={twoYear}
                    onChange={props.handleFilterChange}
                  />
                </div>
                <div>
                  <CheckboxChild
                    label="公立"
                    name="publicSchool"
                    checked={publicSchool}
                    onChange={props.handleFilterChange}
                    className={clsx(c.checkbox, c.checkboxChild)}
                  />
                  <CheckboxChild
                    label="私立"
                    name="privateSchool"
                    checked={privateSchool}
                    onChange={props.handleFilterChange}
                    className={clsx(c.checkbox, c.checkboxChild)}
                  />
                </div>
              </FormGroup>
              {/* <FormGroup>
                <div>
                  <CheckboxChild
                    label="コミュニティカレッジ"
                    name="communityCollege"
                    checked={communityCollege}
                    onChange={props.handleFilterChange}
                  />
                  <CheckboxChild
                    label="専門学校"
                    name="technicalCollege"
                    checked={technicalCollege}
                    onChange={props.handleFilterChange}
                  />
                  <CheckboxChild
                    label="その他"
                    name="other"
                    checked={other}
                    onChange={props.handleFilterChange}
                  />
                </div>
              </FormGroup> */}
              {/* <FormGroup>
                <CheckboxChild
                  label="リベラルアーツカレッジ"
                  name="liberalArtsCollege"
                  checked={liberalArtsCollege}
                  onChange={props.handleFilterChange}
                />
              </FormGroup> */}
            </FormControl>
          </ListItem>
          <Divider />
          <ListItem className={clsx(c.testRangeContainer, c.listItem)}>
            {/** Where - 都市部か田舎か、 */}
            <div className={c.satRangeSlider}>
              <Typography variant="body2" className={c.satRangeText}>
                SATの点数範囲：
                {`${props.states.satRange[0]} ~ ${props.states.satRange[1]}`}
              </Typography>
              <Slider
                value={props.states.satRange}
                onChange={props.handleSatRange}
                // valueLabelDisplay="on"
                aria-labelledby="sat range slider"
                min={600}
                step={50}
                max={1600}
              />
            </div>
            {/* <div className={c.toeflRangeSlider}>
              <Typography variant="body2" className={c.toeflRangeText}>
                TOEFL iBTの点数範囲：
                {props.states.toeflRange !== 120
                  ? `${props.states.toeflRange}+`
                  : `${props.states.toeflRange}`}
              </Typography>
              <Slider
                value={props.states.toeflRange}
                onChange={props.handleToeflRange}
                aria-labelledby="toefl range slider"
                min={60}
                step={5}
                max={120}
              />
            </div> */}
          </ListItem>
          <Divider />
          <ListItem className={c.listItem}>
            <div className={c.tuitionRangeSlider}>
              <Typography variant="body2" className={c.tuitionRangeText}>
                学費の範囲：
                <br />
                {`${
                  props.states.tuitionRange[0] !== 0
                    ? `${props.states.tuitionRange[0]}万円`
                    : `${props.states.tuitionRange[0]}円`
                } ~ ${
                  props.states.tuitionRange[1] !== 600
                    ? `${props.states.tuitionRange[1]}万円 / 年`
                    : `${props.states.tuitionRange[1]}万円以上 / 年`
                }`}
              </Typography>
              <Slider
                value={props.states.tuitionRange}
                onChange={props.handleTuitionRange}
                aria-labelledby="tuition range slider"
                min={0}
                step={10}
                max={600}
              />
            </div>
          </ListItem>
          <Divider />
          <ListItem className={c.listItem}>
            <FormControl className={c.selectStateContainer}>
              <InputLabel id="select-state-label">州別でみる</InputLabel>
              <Select
                labelId="select-state-label"
                id="select-state"
                value={props.states.stateLocation}
                onChange={props.handleStateLocationChange}>
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
          </ListItem>
          <Divider />
          {/* <ListItem className={c.listItem}>
            <FormControl className={c.selectMajorContainer}>
              <InputLabel id="select-major-label">専攻で見る</InputLabel>
              <Select
                labelId="select-major-label"
                id="select-major"
                value={selectMajor}
                onChange={handleMajorChange}>
                <MenuItem value="">特になし</MenuItem>
                <MenuItem value="computerScience">
                  コンピュータ・サイエンス
                </MenuItem>
                <MenuItem value="computerEngineering">
                  コンピュータ・エンジニアリング
                </MenuItem>
                <MenuItem value="mathematics">数学</MenuItem>
                <MenuItem value="philosophy"></MenuItem>
                <MenuItem value="history">歴史</MenuItem>
              </Select>
            </FormControl>
          </ListItem> */}
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
