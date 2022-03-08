import clsx from 'clsx'
import * as React from 'react'
import useStyles from './styles'
import {
  Collapse,
  ListItem,
  ListItemText,
  Table,
  Typography,
} from '@mui/material'
import {
  ExpandMore as ExpandMoreIcon,
  LooksOne as LooksOneIcon,
  LooksTwo as LooksTwoIcon,
  People as PeopleIcon,
} from '@mui/icons-material'

import TableNode from '../../Overview/TableNode/TableNode'

const Program = ({ program }) => {
  const c = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
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
            <Typography variant='body2'>{`${program.credDescJap} - ${program.name}`}</Typography>
          }
        />
        <ExpandMoreIcon
          className={clsx(c.expand, {
            [c.expandOpen]: open,
          })}
        />
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <Table aria-label='プログラムの情報'>
          <tbody>
            <TableNode
              title={'昨年度の卒業生'}
              content={
                program.graduates === '未測定'
                  ? '未測定'
                  : `${program.graduates}人`
              }
            >
              <PeopleIcon
                fontSize='small'
                style={{ marginRight: 10, color: 'green' }}
              />
            </TableNode>
            <TableNode
              title={'卒業１年後の平均年収'}
              content={
                program.medianIncome1 === '未測定'
                  ? '未測定'
                  : `$${program.medianIncome1}`
              }
            >
              <LooksOneIcon
                fontSize='small'
                style={{ marginRight: 10, color: 'blue' }}
              />
            </TableNode>
            <TableNode
              title={'卒業２年後の平均年収'}
              content={
                program.medianIncome2 === '未測定'
                  ? '未測定'
                  : `$${program.medianIncome2}`
              }
            >
              <LooksTwoIcon
                fontSize='small'
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
