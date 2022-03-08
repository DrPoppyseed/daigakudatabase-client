import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'

import { List, ListItem, Typography } from '@mui/material'

import useStyles from './styles'

const Footer = () => {
  const c = useStyles()

  const ListLinkItem = ({ label, linkUrl }) => {
    return (
      <ListItem>
        <Link className={c.linkStyle} to={linkUrl}>
          <Typography variant="body2" className={c.listItemBody2}>
            {label}
          </Typography>
        </Link>
      </ListItem>
    )
  }

  return (
    <div className={clsx(c.root, c.rootContainer)}>
      <Typography className={clsx(c.gridColumn1, c.brand)} variant="h2">
        FORIS
      </Typography>
      <List className={c.gridColumn2}>
        <ListItem>
          <Typography className={c.listItemText} variant="subtitle1">
            大学リスト
          </Typography>
        </ListItem>
        <ListLinkItem linkUrl="#" label="2020年 大学ランキング" />
        <ListLinkItem linkUrl="#" label="2020年 今アツい大学ランキング" />
        <ListLinkItem linkUrl="#" label="アイビーリーグ" />
        <ListLinkItem linkUrl="#" label="パブリックアイビーリーグ" />
        <ListLinkItem linkUrl="#" label="学生スポーツが強い大学ランキング" />
        <ListLinkItem linkUrl="#" label="リベラルアーツカレッジランキング" />
      </List>
      <List className={c.gridColumn3}>
        <ListItem>
          <Typography className={c.listItemText} variant="subtitle1">
            大学レポート
          </Typography>
        </ListItem>
        <ListLinkItem linkUrl="#" label="スタンフォード大学" />
        <ListLinkItem linkUrl="#" label="ハーバード大学" />
        <ListLinkItem linkUrl="#" label="UCバークレー" />
        <ListLinkItem linkUrl="#" label="ワシントン大学" />
        <ListLinkItem linkUrl="#" label="ミシガン大学" />
      </List>
      <div className={c.copyrightContainer}>
        <Typography variant="caption" className={c.copyright}>
          © 2019 - 2020 株式会社FORIS
        </Typography>
      </div>
    </div>
  )
}

export default Footer
