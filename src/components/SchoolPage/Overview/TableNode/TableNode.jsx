import clsx from 'clsx'
import * as React from 'react'
import { TableCell, TableRow, Typography } from '@mui/material'

import useStyles from './styles'

const TableNode = ({
  title,
  content,
  children,
}) => {
  const c = useStyles()

  return (
    <TableRow className={c.root}>
      <TableCell className={c.titleCell} component="th" scope="row">
        <Typography className={clsx(c.tableItem, c.title)} variant="body2">
          {children}
          {title}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography className={clsx(c.tableItem, c.content)} variant="body2">
          {content}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

export default TableNode
