import clsx from 'clsx'
import * as React from 'react'
import useStyles from './styles'
import { Collapse, ListItem, ListItemText, Table, Typography } from '@material-ui/core'
import {
  ExpandMore as ExpandMoreIcon,
  ExposurePlus1 as ExposurePlus1Icon,
  ExposurePlus2 as ExposurePlus2Icon,
  People as PeopleIcon
} from '@material-ui/icons'

import TableNode from '../../Overview/TableNode/TableNode'

const Program = ({ program }) => {
  const c = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = e => {
    setOpen(!open)
  }

  return (
    <div>
      <ListItem button onClick={handleClick}>
        {/* <ListItemText>
          <Typography variant="body1">{`${program.credDescJap} - ${program.name}`}</Typography>
        </ListItemText> */}
        <ListItemText
          // primaryTypographyProps={}
          primary={
            <Typography variant="body2">{`${program.credDescJap} - ${program.name}`}</Typography>
          }
        />
        <ExpandMoreIcon
          className={clsx(c.expand, {
            [c.expandOpen]: open,
          })}
        />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Table aria-label="プログラムの情報">
          <tbody>
            <TableNode
              title={'昨年度の卒業生'}
              content={
                program.graduates === '未測定'
                  ? '未測定'
                  : `${program.graduates}人`
              }>
              <PeopleIcon
                fontSize="small"
                style={{ marginRight: 10, color: 'green' }}
              />
            </TableNode>
            <TableNode
              title={'卒業１年後の平均年収'}
              content={
                program.medianIncome1 === '未測定'
                  ? '未測定'
                  : `$${program.medianIncome1}`
              }>
              <ExposurePlus1Icon
                fontSize="small"
                style={{ marginRight: 10, color: 'blue' }}
              />
            </TableNode>
            <TableNode
              title={'卒業２年後の平均年収'}
              content={
                program.medianIncome2 === '未測定'
                  ? '未測定'
                  : `$${program.medianIncome2}`
              }>
              <ExposurePlus2Icon
                fontSize="small"
                style={{ marginRight: 10, color: 'red' }}
              />
            </TableNode>
          </tbody>
        </Table>
      </Collapse>
    </div>
  )
}

export default Program
